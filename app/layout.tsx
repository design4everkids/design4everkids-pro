import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CartProvider from "@/components/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Design4Ever Kids | Printable Learning Resources",
    template: "%s | Design4Ever Kids",
  },

  description:
    "Fun and engaging printable learning resources, tracing workbooks, coloring activities, and educational worksheets for kids.",

  keywords: [
    "printable worksheets for kids",
    "kids printable activities",
    "preschool worksheets",
    "kindergarten worksheets",
    "tracing workbook",
    "alphabet tracing",
    "number tracing",
    "kids coloring workbook",
    "educational printables",
    "Design4Ever Kids",
  ],

  authors: [
    {
      name: "Design4Ever Kids",
    },
  ],

  creator: "Design4Ever Kids",

  metadataBase: new URL("https://www.design4everkids.com"),

  openGraph: {
    title: "Design4Ever Kids | Printable Learning Resources",
    description:
      "Fun and engaging printable learning resources for kids.",
    url: "https://www.design4everkids.com",
    siteName: "Design4Ever Kids",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}