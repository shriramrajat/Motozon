"use client";

import React, { useState } from 'react';
import { updateLeadStatus } from '@/app/actions/adminLeads';

type Lead = {
  id: string;
  name: string;
  phone: string;
  type: string;
  notes: string | null;
  status: string;
  createdAt: Date;
};

export function LeadsTable({ leads: initialLeads }: { leads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setLoadingId(id);
    const res = await updateLeadStatus(id, newStatus);
    if (res.success) {
      setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    } else {
      alert("Failed to update status");
    }
    setLoadingId(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
              <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Name</th>
              <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Contact</th>
              <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Source / Interest</th>
              <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Date</th>
              <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-gray-500">
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-semibold text-gray-900">{lead.name}</div>
                    {lead.notes && (
                      <div className="text-xs text-gray-500 mt-1 max-w-xs truncate" title={lead.notes}>
                        Note: {lead.notes}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-gray-600 font-medium">{lead.phone}</td>
                  <td className="py-4 px-6">
                     <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">
                       {lead.type}
                     </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 text-sm font-medium">
                    {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={lead.status}
                      disabled={loadingId === lead.id}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`text-sm font-semibold rounded-lg px-3 py-1.5 border outline-none cursor-pointer disabled:opacity-50 ${
                        lead.status === 'NEW' ? 'bg-orange-50 border-orange-200 text-orange-700' :
                        lead.status === 'CONTACTED' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                        lead.status === 'CONVERTED' ? 'bg-green-50 border-green-200 text-green-700' :
                        'bg-red-50 border-red-200 text-red-700'
                      }`}
                    >
                      <option value="NEW">New</option>
                      <option value="CONTACTED">Contacted</option>
                      <option value="CONVERTED">Converted</option>
                      <option value="DEAD">Dead</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
