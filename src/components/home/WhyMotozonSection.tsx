"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function WhyMotozonSection() {
  const reasons = [
    'Transparent Deal',
    'Best Price Guarantee',
    'Genuine Advice',
    'Dedicated Support',
    'After Sales Service'
  ];

  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80" 
              alt="Motozon Office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
          </motion.div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6"
            >
              Why Choose <span className="text-brand-primary">Motozon?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed"
            >
              We pride ourselves on building long-term relationships with our clients. We aren't just here to sell you a vehicle; we're here to ensure your commercial business succeeds.
            </motion.p>

            <div className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 bg-brand-light p-4 rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:bg-white hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="text-brand-primary w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-brand-dark text-lg">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
