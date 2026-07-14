"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-brand-white mb-6"
        >
          Ready to Start Earning?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-white/90 mb-10"
        >
          Join hundreds of successful car owners in Pune who have turned their vehicles into profitable businesses.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/business">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg gap-2 shadow-xl">
              Apply Now <ArrowRight size={20} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto text-lg bg-brand-white text-brand-primary hover:bg-gray-100 gap-2 shadow-xl">
              <Phone size={20} /> Request Callback
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
