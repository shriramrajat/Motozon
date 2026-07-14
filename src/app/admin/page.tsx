import { PrismaClient } from "@prisma/client";
import { Users, Car, AlertCircle, TrendingUp } from "lucide-react";
import Link from 'next/link';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Disable static rendering for this page so it fetches real-time data
export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const totalLeads = await prisma.lead.count();
  const totalCars = await prisma.car.count();
  const newLeads = await prisma.lead.count({ where: { status: 'NEW' } });
  
  const recentLeads = await prisma.lead.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  });

  const stats = [
    { title: "Total Inventory", value: totalCars, icon: <Car size={24} className="text-brand-primary" />, bg: "bg-green-100" },
    { title: "Total Leads", value: totalLeads, icon: <Users size={24} className="text-blue-500" />, bg: "bg-blue-100" },
    { title: "New Leads", value: newLeads, icon: <AlertCircle size={24} className="text-orange-500" />, bg: "bg-orange-100" },
    { title: "Conversion Rate", value: "24%", icon: <TrendingUp size={24} className="text-purple-500" />, bg: "bg-purple-100" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Here is what's happening with Motozon today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 transition-all hover:shadow-md hover:-translate-y-1">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900 font-heading">Recent Leads</h3>
          <Link href="/admin/leads" className="text-sm text-brand-primary font-semibold hover:underline">
            View All Leads &rarr;
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Name</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Phone</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Interest Type</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Status</th>
                <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500">
                    No leads have come in yet.
                  </td>
                </tr>
              ) : (
                recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6 text-gray-900 font-semibold">{lead.name}</td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{lead.phone}</td>
                    <td className="py-4 px-6 text-gray-600">
                       <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">
                         {lead.type}
                       </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${
                        lead.status === 'NEW' ? 'bg-orange-100 text-orange-800 border border-orange-200' :
                        lead.status === 'CONTACTED' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                        lead.status === 'CONVERTED' ? 'bg-green-100 text-green-800 border border-green-200' :
                        'bg-red-100 text-red-800 border border-red-200'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-500 text-sm font-medium">
                      {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit', month: 'short', year: 'numeric'
                      })}
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
