"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Briefcase, TrendingUp, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/home/CTASection';
import { LeadForm } from '@/components/forms/LeadForm';

export default function BusinessOpportunityPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Business Fleet"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-white mb-6"
          >
            Turn Your Car Into A <span className="text-brand-primary">Source of Income</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Don't let your vehicle be a liability. Partner with Motozon to attach your car with top fleet networks and corporate partners in Pune and PCMC for guaranteed monthly earnings.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="text-lg shadow-xl shadow-brand-primary/20"
              onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Earning Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">The Standard Way <span className="text-brand-red">Costs You Money</span></h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Buying a private car means paying EMIs out of your pocket. Your car sits in the parking lot 90% of the time, depreciating in value every single day while insurance and maintenance costs pile up.
                  </p>
                </motion.div>
                
                <div className="h-px bg-gray-200 my-10"></div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">The Motozon Way <span className="text-brand-primary">Makes You Money</span></h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We help you buy a commercial vehicle, arrange flexible bank finance, handle all T-Permit documentation, and attach it to our corporate fleet networks. Your car pays its own EMI and generates profit for you.
                  </p>
                  <ul className="space-y-4 mt-8">
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary w-6 h-6 flex-shrink-0"/> <span className="font-medium text-brand-dark">Zero Idle Time</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary w-6 h-6 flex-shrink-0"/> <span className="font-medium text-brand-dark">EMI Paid from Earnings</span></li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary w-6 h-6 flex-shrink-0"/> <span className="font-medium text-brand-dark">Professional Driver Management Support</span></li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-light p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="text-2xl font-heading font-bold text-center mb-10">Monthly Income Potential</h3>
                 <div className="space-y-8">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="text-gray-600 font-medium">Average Gross Income</span>
                      <span className="font-bold text-brand-dark text-xl">₹65,000 - ₹85,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="text-gray-600 font-medium">Fuel & Driver Expenses</span>
                      <span className="font-bold text-brand-red text-xl">- ₹35,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="text-gray-600 font-medium">Estimated EMI</span>
                      <span className="font-bold text-brand-red text-xl">- ₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 bg-brand-white p-6 rounded-2xl border border-brand-primary/20 shadow-sm mt-4">
                      <span className="text-lg font-bold text-brand-dark">Net Profit (Monthly)</span>
                      <span className="font-bold text-brand-primary text-3xl">₹15K - ₹35K+</span>
                    </div>
                 </div>
                 <p className="text-xs text-gray-400 mt-6 text-center">* Estimates based on standard Sedan running 25 days/month on Pune city corporate contracts. Actuals may vary.</p>
              </motion.div>
            </div>
         </div>
      </section>
      
      <section id="apply-form" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Ready to Build Your <span className="text-brand-primary">Fleet?</span></h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you want to attach a single car or build an entire fleet, our team of experts is ready to guide you through the process, arrange the best finance, and guarantee your attachment.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-1">Apply</h4>
                    <p className="text-gray-500">Fill out the form and our consultants will call you back within 24 hours.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-1">Consult & Select</h4>
                    <p className="text-gray-500">We help you choose the best vehicle and finance options for your budget.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-1">Drive & Earn</h4>
                    <p className="text-gray-500">Get your keys, complete the attachment, and start receiving monthly payouts.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
               <LeadForm defaultType="Business" title="Apply for Business Partnership" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
