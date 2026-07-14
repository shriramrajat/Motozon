"use client";

import React, { useState } from 'react';
import { addCar, toggleCarAvailability, deleteCar } from '@/app/actions/adminCars';
import { Button } from '../ui/Button';
import { Trash2, Plus, Image as ImageIcon } from 'lucide-react';

type Car = {
  id: string;
  name: string;
  brand: string;
  type: string;
  mileage: string;
  fuel: string;
  seats: number;
  price: number;
  expectedEmi: number;
  images: string;
  features: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export function CarsTable({ cars: initialCars }: { cars: Car[] }) {
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      price: Number(formData.get('price')),
      expectedEmi: Number(formData.get('expectedEmi')),
      fuel: formData.get('fuel') as string,
      images: formData.get('images') as string,
    };

    const res = await addCar(data);
    if (res.success) {
      setShowAddForm(false);
      window.location.reload(); // Quick refresh to get new car with ID
    } else {
      alert("Failed to add car");
    }
    setLoading(false);
  };

  const handleToggleAvailability = async (id: string, currentStatus: boolean) => {
    const res = await toggleCarAvailability(id, !currentStatus);
    if (res.success) {
      setCars(cars.map(c => c.id === id ? { ...c, isPublished: !currentStatus } : c));
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this car?")) {
      const res = await deleteCar(id);
      if (res.success) {
        setCars(cars.filter(c => c.id !== id));
      }
    }
  };

  const getImageUrl = (imagesJson: string) => {
    try {
      const arr = JSON.parse(imagesJson);
      return arr[0] || '';
    } catch {
      return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-900">Total Vehicles: {cars.length}</h3>
        <Button onClick={() => setShowAddForm(!showAddForm)} className="gap-2">
          {showAddForm ? 'Cancel' : <><Plus size={18} /> Add New Car</>}
        </Button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Add New Vehicle</h3>
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Model Name</label>
              <input required name="name" placeholder="e.g. Maruti Suzuki Dzire" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <select required name="brand" className="w-full px-4 py-2 rounded-lg border border-gray-300">
                <option value="Maruti Suzuki">Maruti Suzuki</option>
                <option value="Tata">Tata</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Mahindra">Mahindra</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
              <input required name="price" type="number" placeholder="e.g. 800000" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Starting EMI (₹)</label>
              <input required name="expectedEmi" type="number" placeholder="e.g. 15000" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
              <select required name="fuel" className="w-full px-4 py-2 rounded-lg border border-gray-300">
                <option value="CNG">CNG</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="EV">EV</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input required name="images" placeholder="https://example.com/car.jpg" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
            </div>
            <div className="md:col-span-2 pt-2">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : 'Save Vehicle to Inventory'}
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Vehicle</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Price & EMI</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Fuel</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Status</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500">
                    No cars in inventory.
                  </td>
                </tr>
              ) : (
                cars.map((car) => (
                  <tr key={car.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 rounded-md bg-gray-100 overflow-hidden flex-shrink-0 relative">
                          {getImageUrl(car.images) ? (
                            <img src={getImageUrl(car.images)} alt={car.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{car.name}</div>
                          <div className="text-xs text-gray-500">{car.brand}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                       <div className="font-semibold text-gray-900">₹{car.price.toLocaleString('en-IN')}</div>
                       <div className="text-xs text-brand-primary">EMI: ₹{car.expectedEmi.toLocaleString('en-IN')}/mo</div>
                    </td>
                    <td className="py-4 px-6">
                       <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                         {car.fuel}
                       </span>
                    </td>
                    <td className="py-4 px-6">
                      <button 
                        onClick={() => handleToggleAvailability(car.id, car.isPublished)}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                          car.isPublished ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {car.isPublished ? 'Available' : 'Sold Out'}
                      </button>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                       <button onClick={() => handleDelete(car.id)} className="p-2 text-gray-400 hover:text-brand-red transition-colors rounded-lg hover:bg-red-50">
                         <Trash2 size={18} />
                       </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
