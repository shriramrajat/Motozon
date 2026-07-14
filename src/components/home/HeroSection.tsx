"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const counters = [
    { value: '500+', label: 'Cars Delivered' },
    { value: '95%', label: 'Loan Approval' },
    { value: '100%', label: 'Documentation Support' },
    { value: '24×7', label: 'Customer Assistance' },
  ];

  return (
    <section className="relative bg-brand-dark overflow-hidden py-20 lg:py-32">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80" 
          alt="Commercial Vehicle Fleet" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
              Own Your Car.<br/>
              <span className="text-brand-primary">Build Your Business.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-sans">
              Motozon helps individuals purchase commercial vehicles with finance, permits, fleet attachment, insurance, and complete business support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/business">
                <Button size="lg" className="w-full sm:w-auto text-lg gap-2 shadow-lg shadow-brand-primary/20">
                  Get Started <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg border-brand-white text-brand-white hover:bg-brand-white/10 gap-2">
                  <Phone size={20} /> Call Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Counters */}
        <div className="mt-24 border-t border-gray-800 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((counter, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-primary mb-2">
                  {counter.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                  {counter.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
