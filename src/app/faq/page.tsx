"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { FadeIn, FadeInStagger, FadeInStaggerItem, ScaleIn } from '@/components/ui/animations';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Motozon's 'Own Your Car Business' model?",
      answer: "We don't just sell you a car; we help you turn it into a business. We provide the commercial vehicle, secure the bank finance, get the necessary T-Permits, and attach the vehicle to top fleet companies and corporate partners so you can start earning immediately."
    },
    {
      question: "How much loan can I get for a commercial vehicle?",
      answer: "Depending on your CIBIL score and profile, we can help you secure a flexible bank loan for your commercial vehicle. Loan margins vary based on your profile. We work with leading banks and NBFCs to get you the lowest EMI options."
    },
    {
      question: "Do you only sell commercial vehicles?",
      answer: "Yes, our core expertise is in commercial vehicles (T-Permit cars). We cater specifically to individuals and fleet operators who want to use vehicles for business purposes."
    },
    {
      question: "What documents do I need for a T-Permit and car loan?",
      answer: "Generally, you will need your Aadhar Card, PAN Card, Driving License (with commercial badge), Bank Statements (last 6 months), and address proof. Our documentation team will guide you through the exact requirements based on your profile."
    },
    {
      question: "Do you guarantee business attachment?",
      answer: "Yes! Once your vehicle is ready with all the permits, we help attach it to reputable platforms or corporate partners. We have tie-ups that ensure your vehicle doesn't sit idle."
    },
    {
      question: "Can I choose any car brand?",
      answer: "Absolutely. We deal with all major brands suitable for commercial use, including Maruti Suzuki, Tata Motors, Hyundai, and Mahindra. We can help you choose the best car based on mileage, maintenance costs, and your budget."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 pt-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <div className="inline-block bg-brand-primary/10 text-brand-primary font-bold px-4 py-2 rounded-full mb-6 text-sm">
            Got Questions?
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services, finance options, and business attachments.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <FadeInStaggerItem 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIdx === idx ? 'border-brand-primary shadow-md' : 'border-gray-200 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-brand-primary flex-shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <ScaleIn delay={0.2} className="bg-brand-dark rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold font-heading mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            If you couldn't find the answer you were looking for, our team is ready to help you out.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-10">Contact Support</Button>
          </Link>
        </ScaleIn>
      </div>
    </div>
  );
}
