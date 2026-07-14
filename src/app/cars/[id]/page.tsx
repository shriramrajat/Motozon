import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Check, CheckCircle2 } from "lucide-react";
import { FadeIn, ScaleIn } from '@/components/ui/animations';

export const dynamic = 'force-dynamic';

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = await prisma.car.findUnique({
    where: { id }
  });

  if (!car) {
    notFound();
  }

  const getImageUrl = (imagesJson: string) => {
    try {
      const arr = JSON.parse(imagesJson);
      return arr[0] || '';
    } catch {
      return '';
    }
  };

  const getFeatures = (featuresJson: string) => {
    try {
      return JSON.parse(featuresJson) as string[];
    } catch {
      return [];
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link href="/cars" className="text-sm font-semibold text-brand-primary hover:underline mb-8 inline-block">
          &larr; Back to all vehicles
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          
          {/* Image Section */}
          <ScaleIn className="rounded-2xl overflow-hidden bg-gray-100 relative h-80 md:h-[500px]">
             {getImageUrl(car.images) ? (
               <img src={getImageUrl(car.images)} alt={car.name} className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
             )}
          </ScaleIn>

          {/* Details Section */}
          <FadeIn delay={0.2} className="flex flex-col">
            <div className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">{car.brand}</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">{car.name}</h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm">
                Fuel: {car.fuel}
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm">
                Type: {car.type}
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm">
                Seats: {car.seats}
              </span>
            </div>

            <div className="bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/10 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Estimated EMI</span>
                <span className="text-3xl font-bold text-brand-primary">₹{car.expectedEmi.toLocaleString('en-IN')}<span className="text-lg text-gray-500 font-medium">/mo</span></span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-brand-primary/10">
                <span className="text-gray-600 font-medium">Total Vehicle Price</span>
                <span className="text-xl font-bold text-gray-900">₹{car.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {getFeatures(car.features).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link href={`/business?interest=${encodeURIComponent(car.name)}`}>
                 <Button size="lg" className="w-full text-lg h-14">
                   Enquire About This Vehicle
                 </Button>
              </Link>
              <p className="text-center text-sm text-gray-500 mt-4">
                No commitment required. Our experts will call you to discuss finance options and availability.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
