import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import { products } from "@/data/products";

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ productId: string }>;
  }
) {
  try {
    const { productId } = await params;

    const id = Number(productId);

    if (!id) {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }

    const product = products.find(
      (item) => item.id === id
    );

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Get payment ID from URL
    const { searchParams } = new URL(request.url);

    const paymentId =
      searchParams.get("paymentId");

    if (!paymentId) {
      return NextResponse.json(
        {
          error: "Payment ID is required",
        },
        { status: 401 }
      );
    }

    // Find the paid order using Razorpay payment ID
    const { data: order, error: orderError } =
      await supabaseAdmin
        .from("orders")
        .select("id, product_ids")
        .eq(
          "razorpay_payment_id",
          paymentId
        )
        .single();

    if (orderError || !order) {
      console.error(
        "Order lookup error:",
        orderError
      );

      return NextResponse.json(
        {
          error:
            "Valid purchase could not be found",
        },
        { status: 403 }
      );
    }

    // Convert product_ids safely
    let purchasedProductIds: number[] = [];

    if (Array.isArray(order.product_ids)) {
      purchasedProductIds =
        order.product_ids.map(Number);
    } else if (
      typeof order.product_ids === "string"
    ) {
      try {
        const parsed =
          JSON.parse(order.product_ids);

        if (Array.isArray(parsed)) {
          purchasedProductIds =
            parsed.map(Number);
        }
      } catch {
        purchasedProductIds =
          order.product_ids
            .split(",")
            .map((value: string) =>
              Number(value.trim())
            );
      }
    }

    // Check whether this product was purchased
    if (!purchasedProductIds.includes(id)) {
      return NextResponse.json(
        {
          error:
            "You have not purchased this product",
        },
        { status: 403 }
      );
    }

    // Create a temporary secure download URL
    const { data, error: storageError } =
      await supabaseAdmin.storage
        .from("products")
        .createSignedUrl(
          product.storagePath,
          60 * 10
        );

    if (
      storageError ||
      !data?.signedUrl
    ) {
      console.error(
        "Storage error:",
        storageError
      );

      return NextResponse.json(
        {
          error:
            "Unable to create secure download link",
        },
        { status: 500 }
      );
    }

    // Redirect customer to temporary signed URL
    return NextResponse.redirect(
      data.signedUrl
    );
  } catch (error) {
    console.error(
      "Download Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to download product",
      },
      { status: 500 }
    );
  }
}