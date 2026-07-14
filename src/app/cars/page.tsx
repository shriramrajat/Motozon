import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/animations';

export const dynamic = 'force-dynamic';

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' }
  });

  const getImageUrl = (imagesJson: string) => {
    try {
      const arr = JSON.parse(imagesJson);
      return arr[0] || '';
    } catch {
      return '';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
            Available <span className="text-brand-primary">Commercial Vehicles</span>
          </h1>
          <p className="text-lg text-gray-600">
            Browse our curated selection of commercial vehicles ready to hit the road and grow your business.
          </p>
        </FadeIn>

        {cars.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">No vehicles currently available.</h3>
            <p className="text-gray-500">Please check back later or contact us for specific requirements.</p>
          </div>
        ) : (
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car: any) => (
              <FadeInStaggerItem key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100 flex flex-col">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  {getImageUrl(car.images) ? (
                    <img 
                      src={getImageUrl(car.images)} 
                      alt={car.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {car.fuel}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm font-semibold text-gray-500 mb-1">{car.brand}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{car.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Starting EMI</div>
                      <div className="font-bold text-brand-primary">₹{car.expectedEmi.toLocaleString('en-IN')}/mo</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Total Price</div>
                      <div className="font-bold text-gray-900">₹{car.price.toLocaleString('en-IN')}</div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex gap-3">
                    <Link href={`/cars/${car.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                    <Link href={`/business?interest=${car.name}`} className="flex-1">
                      <Button className="w-full">Enquire Now</Button>
                    </Link>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        )}
      </div>
    </div>
  );
}
