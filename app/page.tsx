/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Sparkles, PartyPopper } from "lucide-react";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Tawk.to Widget Script */}
      <Script id="tawk-to-widget" strategy="afterInteractive">
        {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5e918dc269e9320caac288d3/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            HUSTLE & BUSTLE
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-light mb-8 text-purple-300"
          >
            THE SURGE
          </motion.div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            🎉 The event is happening TODAY! 🎉
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-6">
            See You at the Event!
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Tickets are sold out online, but you can still purchase them in person at the venue.
          </p>
          <div className="mt-10">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 font-semibold">
              Thank you for your incredible support! 💜
            </p>
            <PartyPopper className="w-16 h-16 text-purple-400 mx-auto mt-6" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
