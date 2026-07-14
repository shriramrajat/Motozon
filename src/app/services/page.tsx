import React from 'react';
import { Shield, Car, Briefcase, FileText, Wrench, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FadeIn, FadeInStagger, FadeInStaggerItem, ScaleIn } from '@/components/ui/animations';

export default function ServicesPage() {
  const services = [
    {
      icon: <Car size={32} />,
      title: "New Commercial Vehicles",
      description: "We provide access to the latest commercial vehicles from top brands like Maruti Suzuki, Tata, and Mahindra, ensuring you get reliable and high-performing assets."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Car Finance Solutions",
      description: "Get easy approvals with flexible bank loans tailored for commercial purchases. We handle the negotiations and paperwork to secure the best EMI for you."
    },
    {
      icon: <FileText size={32} />,
      title: "T-Permit & Documentation",
      description: "Navigating RTO rules can be tough. We provide end-to-end T-Permit assistance, ensuring your commercial vehicle is legally compliant and ready for business instantly."
    },
    {
      icon: <Shield size={32} />,
      title: "Fleet Attachment",
      description: "Don't just buy a car, get a guaranteed business. We help attach your new commercial vehicle to top fleet networks and corporate partners for consistent monthly income."
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Insurance Assistance",
      description: "We help you select the best commercial insurance plans that cover your vehicle, driver, and passengers without draining your profits."
    },
    {
      icon: <Wrench size={32} />,
      title: "After-Sales Support",
      description: "Our relationship doesn't end at delivery. We provide continuous maintenance guidance, warranty claim support, and service reminders to keep your business running."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 pt-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-brand-primary">Services</span> for Your Business
          </h1>
          <p className="text-lg text-gray-600">
            Motozon provides an end-to-end consultancy and acquisition service. We don't just sell cars; we build your commercial transport business.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <FadeInStaggerItem key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <ScaleIn delay={0.2} className="mt-20 bg-brand-dark text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements. Our experts will guide you to the perfect vehicle and business attachment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">Contact Our Experts</Button>
             </Link>
             <Link href="/cars">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-brand-dark border-brand-white bg-brand-white hover:bg-gray-100">
                  Browse Vehicles
                </Button>
             </Link>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}
