export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-4xl font-extrabold text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-gray-600">
          By using Design4Ever Kids, you agree to the following terms
          and conditions.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl bg-white p-8 shadow-lg">

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Digital Products
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              All products sold through Design4Ever Kids are digital
              printable learning resources. No physical products will
              be shipped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Personal Use
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Purchased files are intended for personal or classroom use.
              They may not be resold, redistributed, uploaded to other
              websites, or commercially redistributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Payments
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Payments are processed securely through our payment provider.
              Access to purchased digital products is provided after
              successful payment verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Refunds
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Because our products are digital downloads, please review
              the product information carefully before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Contact
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              If you have any questions about these Terms & Conditions,
              please contact us through our Contact page.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}