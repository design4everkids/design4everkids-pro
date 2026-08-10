"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="font-semibold text-pink-600">
            We'd Love To Hear From You
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contact Us 📩
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Have a question about our products or your order?
            Send us a message and we'll be happy to help.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <div className="mt-7 space-y-5">

              <div className="rounded-2xl bg-pink-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  Email
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  support@design4everkids.com
                </p>
              </div>

              <div className="rounded-2xl bg-pink-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  Website
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  www.design4everkids.com
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="text-2xl font-bold text-gray-900">
              Send Us A Message
            </h2>

            {submitted ? (
              <div className="mt-7 rounded-2xl bg-green-50 p-6 text-center">
                <div className="text-4xl">✅</div>
                <h3 className="mt-3 text-xl font-bold text-green-700">
                  Message Received!
                </h3>
                <p className="mt-2 text-green-600">
                  Thank you for contacting Design4Ever Kids.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-pink-600 py-4 font-semibold text-white transition hover:bg-pink-700"
                >
                  Send Message 📩
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}