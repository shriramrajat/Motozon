import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn, FadeInStagger, FadeInStaggerItem, ScaleIn } from '@/components/ui/animations';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <FadeIn className="lg:w-1/2">
            <div className="inline-block bg-brand-primary/10 text-brand-primary font-bold px-4 py-2 rounded-full mb-6 text-sm">
              About Motozon
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Driving Ambitions, <br />
              <span className="text-brand-primary">Building Businesses.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in Pune, Motozon is not just another car dealership. We are a dedicated commercial vehicle consultancy and business partner. We help ambitious individuals start their own transport business by providing access to commercial vehicles, easy finance, and guaranteed fleet attachments.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-sm text-gray-500 font-medium">Vehicles Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-500 font-medium">Loans Approved</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-500 font-medium">Corporate Partners</div>
              </div>
            </div>
          </FadeIn>
          <ScaleIn delay={0.2} className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/logo.jpg" 
                alt="Motozon Logo" 
                className="w-full h-full object-contain bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Motozon Multicars</h3>
                <p className="text-sm text-gray-200">Business Solution</p>
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <FadeIn delay={0.1} className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-100">
            <Target size={40} className="text-brand-primary mb-6" />
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower individuals to become independent entrepreneurs by providing them with a seamless pathway to owning commercial vehicles and securing consistent business opportunities.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-brand-dark rounded-3xl p-10 md:p-12 text-white shadow-xl">
            <TrendingUp size={40} className="text-brand-primary mb-6" />
            <h2 className="text-3xl font-bold font-heading mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To be the leading commercial vehicle consultancy in India, recognized for transforming the unorganized transport sector into a structured and highly profitable business avenue for drivers and owners alike.
            </p>
          </FadeIn>
        </div>

        {/* Core Values */}
        <FadeIn className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12">Why Choose Motozon?</h2>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <FadeInStaggerItem className="p-8">
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-First Philosophy</h3>
              <p className="text-gray-600">We don't push sales. We analyze your requirements and budget to suggest the most profitable vehicle and finance plan for your situation.</p>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="p-8 border-l border-gray-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Solutions</h3>
              <p className="text-gray-600">From helping you choose the car, to getting the loan approved, to securing the T-permit and attaching it to a company—we do it all.</p>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="p-8 border-l border-gray-100">
              <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Income</h3>
              <p className="text-gray-600">We provide direct attachments with top fleet networks and corporate partners so your asset starts generating returns from day one.</p>
            </FadeInStaggerItem>
          </FadeInStagger>
        </FadeIn>

      </div>
    </div>
  );
}
