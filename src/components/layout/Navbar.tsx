"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Business Opportunity', href: '/business' },
    { name: 'Cars', href: '/cars' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-brand-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2' : 'bg-brand-white py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Motozon Logo" className="h-12 w-auto object-contain rounded-full" />
              <span className="font-heading font-bold text-2xl md:text-3xl text-brand-primary tracking-tight">
                MOTOZON
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-dark hover:text-brand-primary font-medium text-sm lg:text-base transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button variant="outline" size="sm" className="hidden lg:flex gap-2">
              <Phone size={16} /> 9145795055
            </Button>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                 Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-brand-white border-b border-gray-100 shadow-xl absolute w-full left-0 top-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:text-brand-primary hover:bg-brand-light"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="p-4 px-6 border-t border-gray-100 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-center gap-2 py-3">
              <Phone size={18} /> Call Us
            </Button>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full justify-center gap-2 py-3">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
