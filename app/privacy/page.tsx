export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-extrabold text-gray-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-gray-600">
          At Design4Ever Kids, we respect your privacy and are committed
          to protecting your personal information.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl bg-white p-8 shadow-lg">

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              When you place an order, we may collect information such as
              your name and email address to process your purchase and
              provide access to your purchased digital products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Payment Information
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Payments are processed through our payment provider.
              We do not directly store your complete card or banking
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Digital Products
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Purchased digital products are provided through our secure
              download system after successful payment verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              If you have questions about this Privacy Policy, please
              contact us through our Contact page.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}