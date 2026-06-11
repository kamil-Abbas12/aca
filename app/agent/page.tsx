"use client";

import { useEffect, useState } from "react";

export default function AgentPage() {
  const [accepted, setAccepted] = useState<null | boolean>(null);

  return (
    <main className="min-h-screen bg-[#dfeaf2] flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-[#1e3a5f] mb-2 text-center">
        Need Help Deciding?
      </h1>
      <p className="text-[#1e3a5f] mb-8 text-center">
        Call a licensed insurance agent for additional guidance.
      </p>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <div className="bg-[#1e2a4a] flex justify-center py-10">
          <div className="bg-[#1e2a4a] rounded-3xl border-4 border-gray-700 w-64 p-6 flex flex-col items-center text-white">
            <div className="w-20 h-20 rounded-full bg-white overflow-hidden mb-4">
              <img
                src="/agent-call-iphone.webp"
                alt="Licensed Insurance Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-lg">Licensed Insurance</p>
            <p className="font-semibold text-lg mb-1">Agent</p>
            <p className="text-gray-300 text-sm mb-8">connecting...</p>

            <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 w-full">
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                📞
              </div>
              <span className="text-gray-300 text-sm">slide to answer</span>
            </div>
          </div>
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1e2a4a] mb-2">
            A licensed insurance agent just became available!
          </h2>
          <p className="text-gray-500 mb-6">
            To speak with a licensed insurance agent, click on the button below!
          </p>

          
            <a href="tel:8446031233"
            className="block w-full bg-[#f5b526] text-white font-bold text-xl py-4 rounded-md text-center hover:opacity-90 transition"
          >
            844-603-1233 📞
          </a>
        </div>
      </div>
    </main>
  );
}