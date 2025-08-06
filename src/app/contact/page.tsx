"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-black/60 border border-red-700 rounded-lg shadow-xl p-6 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-8 border-b border-red-700 pb-3">
          Contact Me
        </h1>

        <div className="space-y-6 text-base md:text-lg">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone
            </label>
            <a
              href="tel:+919381278735"
              className="text-white hover:text-red-500 transition"
            >
              +91 9381278735
            </a>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <a
              href="mailto:neelurigunasekhar09564@gmail.com"
              className="text-white hover:text-red-500 transition"
            >
              neelurigunasekhar09564@gmail.com
            </a>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Portfolio
            </label>
            <Link
              href="http://gunasekhar.xyz/"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              gunasekhar.xyz
            </Link>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              LinkedIn
            </label>
            <Link
              href="https://www.linkedin.com/in/gunasekharneeluri/"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              linkedin.com/in/gunasekharneeluri
            </Link>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              GitHub
            </label>
            <Link
              href="https://github.com/gunasekhar11"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              github.com/gunasekhar11
            </Link>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Resume
            </label>
            <Link
              href="https://drive.google.com/file/d/1DCm3mN6fM9rSFvcKnaSv_w2oV3dzZ7qA/view"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
