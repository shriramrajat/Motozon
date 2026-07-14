import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <img src="/logo.jpg" alt="Motozon Logo" className="h-16 w-16 object-cover rounded-full border-2 border-brand-primary" />
              <span className="font-heading font-bold text-3xl tracking-tight text-white">
                MOTOZON
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs mt-4 leading-relaxed">
              Turn your car into a source of monthly income. Pune's trusted commercial vehicle consultancy and business partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-brand-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-white transition-colors">Services</Link></li>
              <li><Link href="/business" className="text-gray-400 hover:text-brand-white transition-colors">Business Opportunity</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-brand-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/cars" className="text-gray-400 hover:text-brand-white transition-colors">Commercial Vehicles</Link></li>
              <li><Link href="/finance" className="text-gray-400 hover:text-brand-white transition-colors">Car Finance</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-white transition-colors">Fleet Attachment</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-white transition-colors">T-Permit & Insurance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-primary flex-shrink-0 mt-1" size={18} />
                <span>Kalubai Nagar Kharadi Pune</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-primary flex-shrink-0" size={18} />
                <span>9145795055</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-primary flex-shrink-0" size={18} />
                <span>pramodmyakal@gmail.com</span>
              </li>
              <li className="pt-2 text-brand-white font-medium hover:text-brand-primary transition-colors">
                 <a href="https://www.instagram.com/motozon.multicars/" target="_blank" rel="noopener noreferrer">Follow us on Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Motozon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
