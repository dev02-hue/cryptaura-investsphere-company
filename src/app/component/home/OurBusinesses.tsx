"use client";

import { businesses } from "@/types/businesses";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurBusinesses() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              Investment Verticals
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Strategic Investment <span className="text-teal-600">Portfolios</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            CRYPTAURA INVESTSPHERE COMPANY leverages diversified investment strategies 
            across multiple high-growth sectors to maximize returns and minimize risk.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {businesses.map(({ id, title, description, image, icon: Icon }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Icon className="text-xl text-teal-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-teal-50 rounded-lg p-2 flex-shrink-0">
                    <Icon className="text-xl text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 leading-tight">
                    {title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-teal-600 text-sm font-semibold">
                    <span>Explore Portfolio</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Diversify Your Portfolio?
            </h3>
            <p className="text-teal-100 text-lg mb-6 max-w-2xl mx-auto">
              Join CRYPTAURA INVESTSPHERE COMPANY and access our exclusive investment opportunities 
              across multiple high-yield sectors with professional management and strategic oversight.
            </p>
            <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Investing Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}