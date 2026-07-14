"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';
import { Button } from '../ui/Button';

export function EmiCalculator() {
  const [carPrice, setCarPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const principal = Math.max(0, carPrice - downPayment);
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (principal > 0 && r > 0 && n > 0) {
      const calculatedEmi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(Math.round(calculatedEmi));
    } else {
      setEmi(0);
    }
  }, [carPrice, downPayment, interestRate, tenure]);

  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4"
            >
              Smart <span className="text-brand-primary">EMI Calculator</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-10"
            >
              Plan your finances easily. See how much your monthly commitment will be before making a decision. Up to 90% financing available!
            </motion.p>

            <div className="space-y-6">
              {/* Car Price */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-brand-dark">Car Price (₹)</label>
                  <span className="text-brand-primary font-bold">₹{carPrice.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="300000" 
                  max="2500000" 
                  step="50000" 
                  value={carPrice} 
                  onChange={(e) => setCarPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-brand-dark">Down Payment (₹)</label>
                  <span className="text-brand-primary font-bold">₹{downPayment.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max={carPrice} 
                  step="10000" 
                  value={downPayment} 
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-brand-dark">Interest Rate (%)</label>
                  <span className="text-brand-primary font-bold">{interestRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="7" 
                  max="15" 
                  step="0.1" 
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-brand-dark">Loan Tenure (Years)</label>
                  <span className="text-brand-primary font-bold">{tenure} Years</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  step="1" 
                  value={tenure} 
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-3xl p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-heading font-bold text-brand-white mb-2">Estimated EMI</h3>
            <p className="text-gray-400 mb-8">Your monthly payment will be roughly</p>
            
            <div className="flex items-center justify-center text-5xl md:text-6xl font-heading font-extrabold text-brand-primary mb-8">
              <IndianRupee className="w-10 h-10 md:w-12 md:h-12 mr-2" />
              {emi.toLocaleString('en-IN')}
            </div>

            <div className="grid grid-cols-2 gap-4 text-left border-t border-gray-800 pt-8 mb-8">
              <div>
                <p className="text-gray-400 text-sm">Principal Amount</p>
                <p className="text-brand-white font-bold text-lg">₹{(carPrice - downPayment).toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Interest</p>
                <p className="text-brand-white font-bold text-lg">₹{((emi * tenure * 12) - (carPrice - downPayment)).toLocaleString('en-IN')}</p>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full text-lg">
              Check Finance Eligibility
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
