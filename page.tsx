
'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <header className="text-center mb-12">
        <Image
          src="/logo.png"
          alt="Secure Stay Certification"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">Secure Stay Certification</h1>
        <p className="mt-2 text-lg text-gray-600">Rent with peace of mind. Verify your property. Protect your guests.</p>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded">Book an Inspection</button>
      </header>

      <main className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Certification Matters</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Verified smoke and carbon monoxide detectors</li>
            <li>Smart tech safety integration</li>
            <li>Emergency plan documentation</li>
            <li>Third-party inspection badge</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get Certified in 3 Easy Steps</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li>Schedule your inspection online</li>
            <li>Meet with a licensed safety inspector</li>
            <li>Display your Verified Secure Stay badge</li>
          </ol>
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded">Apply for Certification</button>
        </div>
      </main>

      <footer className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Secure Stay Certification. All rights reserved.
      </footer>
    </div>
  );
}
