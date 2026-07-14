"use client";

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem, ScaleIn } from '@/components/ui/animations';
import { LeadForm } from '@/components/forms/LeadForm';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-primary/10 text-brand-primary font-bold px-4 py-2 rounded-full mb-6 text-sm">
            Contact Motozon
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Get In <span className="text-brand-primary">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            Whether you want to buy a vehicle, get a loan, or attach your car for business, our team is ready to help you every step of the way.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Let's start your business journey</h2>
            </FadeIn>
            
            <FadeInStagger className="space-y-8">
              <FadeInStaggerItem className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-600">Call us or drop a message anytime.</p>
                  <a href="tel:9145795055" className="text-brand-primary font-semibold hover:underline mt-1 inline-block">
                    +91 91457 95055
                  </a>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">Send us your queries.</p>
                  <a href="mailto:pramodmyakal@gmail.com" className="text-brand-primary font-semibold hover:underline mt-1 inline-block">
                    pramodmyakal@gmail.com
                  </a>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Office Location</h4>
                  <p className="text-gray-600">Visit us for a face-to-face consultation.</p>
                  <p className="font-medium text-gray-900 mt-1">
                    Kalubai Nagar, Kharadi, Pune<br />Maharashtra
                  </p>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>

            <FadeIn delay={0.4} className="mt-12 pt-10 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Connect with us</h4>
              <a 
                href="https://www.instagram.com/motozon.multicars/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                Follow on Instagram
              </a>
            </FadeIn>
          </div>

          {/* Form */}
          <ScaleIn delay={0.3} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -z-10"></div>
             <LeadForm defaultType="General Inquiry" title="Send us a Message" />
          </ScaleIn>

        </div>
      </div>
    </div>
  );
}
