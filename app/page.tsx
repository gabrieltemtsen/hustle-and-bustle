/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Sparkles, Music, PartyPopper, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Script from "next/script";

export default function Home() {
  const tickets = [
    {
      name: "REGULAR",
      price: "5,000",
      icon: <Music className="w-6 h-6" />,
      features: ["Standard Entry", "Access to Main Area", "Bar Access"],
    },
    {
      name: "VIP",
      price: "10,000",
      icon: <Ticket className="w-6 h-6" />,
      features: ["Group Entry", "Special Queue", "Exclusive Area Access"],
    },
    {
      name: "TABLE OF 5",
      price: "100,000",
      icon: <PartyPopper className="w-6 h-6" />,
      features: ["VIP Table", "Bottle Service", "Personal Waiter", "Premium View"],
    },
    {
      name: "TABLE OF 10",
      price: "200,000",
      icon: <Sparkles className="w-6 h-6" />,
      features: ["Premium VIP Table", "Premium Bottle Service", "Dedicated Waiter", "Best View"],
    },
  ];

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
            Experience the ultimate night of luxury, music, and unforgettable moments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="p-6 h-full bg-white/10 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-purple-400">{ticket.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{ticket.name}</h3>
                  <div className="text-3xl font-bold mb-4 text-purple-300">
                    ₦{ticket.price}
                  </div>
                  <ul className="mb-6 flex-grow">
                    {ticket.features.map((feature) => (
                      <li key={feature} className="mb-2 text-gray-300 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300">
            Join the Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't miss out on the most exclusive party of the year. Limited tickets available.
          </p>

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">
              How to Purchase Tickets
            </h3>
            <ol className="list-decimal list-inside text-gray-300 text-left max-w-2xl mx-auto mb-6 space-y-4">
              <li>
                Choose your desired ticket category from the options above.
              </li>
              <li>
                Transfer the exact amount for your ticket to the account details provided below.
              </li>
              <li>
                Once you've made the transfer, gather your transaction invoice.
              </li>
              <li>
                Use the chat option on this page to submit your invoice, along with your name and email.
              </li>
              <li>
                Wait for approval and verification. After verification, you'll receive your Ticket QR code.
              </li>
              <li>
                Present your QR code at the event for entry. Enjoy the experience!
              </li>
            </ol>

            <div className="mb-6">
              <p className="text-lg text-gray-300">
                Account Number: <span className="font-bold">5805060636</span>
              </p>
              <p className="text-lg text-gray-300">
                Account Name: <span className="font-bold">GILIP SOLUTIONS</span>
              </p>
              <p className="text-lg text-gray-300">
                Bank Name: <span className="font-bold">Moniepoint MFB</span>
              </p>
            </div>

            <div className="flex justify-center">
              <iframe
                src="https://lu.ma/embed/event/evt-ETtGmBrTSgsF5E5/simple"
                width="600"
                height="450"
                style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
