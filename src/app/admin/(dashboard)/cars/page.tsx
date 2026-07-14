import { prisma } from "@/lib/prisma";
import { CarsTable } from "@/components/admin/CarsTable";

export const dynamic = 'force-dynamic';

export default async function AdminCarsPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-500 mt-1">Add, update, or remove commercial vehicles from the website.</p>
        </div>
      </div>

      <CarsTable cars={cars} />
    </div>
  );
}
