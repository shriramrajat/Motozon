"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Car, IndianRupee, FileCheck, Map, Shield, FileText } from 'lucide-react';
import Link from 'next/link';

export function ServicesSection() {
  const services = [
    {
      title: 'New Car Purchase',
      description: 'Get the best deals on commercial vehicles from top brands like Maruti Suzuki, Tata, and Hyundai.',
      icon: <Car className="w-8 h-8 text-brand-primary" />,
    },
    {
      title: 'Easy Finance',
      description: 'Up to 90% bank loans with minimal documentation and instant approval for commercial use.',
      icon: <IndianRupee className="w-8 h-8 text-brand-primary" />,
    },
    {
      title: 'T-Permit Solutions',
      description: 'Hassle-free yellow board (Tourist) permit registration and RTO compliance.',
      icon: <FileCheck className="w-8 h-8 text-brand-primary" />,
    },
    {
      title: 'Fleet Attachment',
      description: 'Direct attachment with Ola, Uber, and top IT companies in Pune for guaranteed monthly income.',
      icon: <Map className="w-8 h-8 text-brand-primary" />,
    },
    {
      title: 'Commercial Insurance',
      description: 'Comprehensive insurance packages specifically designed for commercial vehicles.',
      icon: <Shield className="w-8 h-8 text-brand-primary" />,
    },
    {
      title: 'Documentation',
      description: 'End-to-end paperwork assistance so you can focus on driving your business.',
      icon: <FileText className="w-8 h-8 text-brand-primary" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-brand-light" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4"
          >
            End-to-End <span className="text-brand-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We don't just sell cars. We set up your entire business. Everything you need under one roof.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-brand-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(15,106,53,0.1)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href="/services" className="text-brand-primary font-semibold hover:text-brand-dark transition-colors inline-flex items-center gap-1 group-hover:gap-2">
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
