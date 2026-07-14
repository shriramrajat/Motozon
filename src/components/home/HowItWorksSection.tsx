"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HowItWorksSection() {
  const steps = [
    { num: '1', title: 'Choose Vehicle', desc: 'Select the right commercial car for your needs.' },
    { num: '2', title: 'Finance Approval', desc: 'Quick processing for flexible bank loans.' },
    { num: '3', title: 'Documentation', desc: 'We handle RTO, T-Permit, and Insurance.' },
    { num: '4', title: 'Vehicle Delivery', desc: 'Get the keys to your new business asset.' },
    { num: '5', title: 'Fleet Attachment', desc: 'Direct onboarding with top fleet networks.' },
    { num: '6', title: 'Start Earning', desc: 'Begin your guaranteed monthly income journey.' },
  ];

  return (
    <section className="py-24 bg-brand-dark text-brand-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            How It <span className="text-brand-primary">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Your path to owning a business in 6 simple steps.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-dark via-brand-primary/50 to-brand-dark -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-brand-dark border-4 border-gray-800 group-hover:border-brand-primary transition-colors duration-500 rounded-full flex items-center justify-center text-3xl font-heading font-bold text-gray-500 group-hover:text-brand-white mb-6 group-hover:shadow-[0_0_20px_rgba(15,106,53,0.4)] relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
