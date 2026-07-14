import { prisma } from './src/lib/prisma';

async function main() {
  console.log('Seeding commercial vehicles...');

  const cars = [
    {
      brand: 'Maruti Suzuki',
      name: 'Ertiga Tour M',
      type: 'MUV',
      fuel: 'CNG',
      mileage: '26 km/kg',
      seats: 7,
      price: 1060000,
      expectedEmi: 18500,
      features: JSON.stringify([
        'Factory Fitted CNG',
        'High Mileage (26 km/kg)',
        'Spacious 7-Seater',
        'Low Maintenance Cost',
        'High Resale Value'
      ]),
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80' // Using a generic white car/MUV photo
      ]),
      isPublished: true,
    },
    {
      brand: 'Hyundai',
      name: 'Aura Prime',
      type: 'Sedan',
      fuel: 'CNG',
      mileage: '28 km/kg',
      seats: 5,
      price: 850000,
      expectedEmi: 15200,
      features: JSON.stringify([
        'Factory Fitted CNG',
        'Premium Interiors',
        'Large Boot Space',
        'Excellent Ride Quality',
        'Corporate Fleet Favorite'
      ]),
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80' // Generic white sedan
      ]),
      isPublished: true,
    },
    {
      brand: 'Maruti Suzuki',
      name: 'Swift Dzire Tour S',
      type: 'Sedan',
      fuel: 'CNG',
      mileage: '31 km/kg',
      seats: 5,
      price: 750000,
      expectedEmi: 13500,
      features: JSON.stringify([
        'Highest Selling Commercial Sedan',
        'Unmatched Mileage (31 km/kg)',
        'Cheap Spare Parts',
        'Highly Reliable Engine'
      ]),
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&w=1000&q=80'
      ]),
      isPublished: true,
    },
    {
      brand: 'Toyota',
      name: 'Innova Crysta',
      type: 'MUV',
      fuel: 'Diesel',
      mileage: '15 km/l',
      seats: 7,
      price: 2200000,
      expectedEmi: 38000,
      features: JSON.stringify([
        'Premium Corporate Client Attachment',
        'Unmatched Comfort & Space',
        'Highly Reliable (Runs for Lakhs of KMs)',
        'Powerful Diesel Engine',
        'Excellent Resale Value'
      ]),
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80' // Generic large suv/muv
      ]),
      isPublished: true,
    },
    {
      brand: 'Tata',
      name: 'Tiago EV Fleet',
      type: 'Hatchback',
      fuel: 'Electric',
      mileage: '250 km/charge',
      seats: 5,
      price: 900000,
      expectedEmi: 16000,
      features: JSON.stringify([
        'Zero Tailpipe Emissions',
        'Running Cost < ₹1/km',
        'Automatic Transmission',
        'Low Maintenance',
        'Fast Charging Capable'
      ]),
      images: JSON.stringify([
        'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80' // Generic white small car
      ]),
      isPublished: true,
    }
  ];

  for (const car of cars) {
    await prisma.car.create({
      data: car
    });
    console.log(`Created car: ${car.name}`);
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
