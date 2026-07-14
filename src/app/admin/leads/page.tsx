import { prisma } from "@/lib/prisma";
import { LeadsTable } from "@/components/admin/LeadsTable";

export const dynamic = 'force-dynamic';

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-500 mt-1">Manage and update the status of your customer inquiries.</p>
        </div>
      </div>

      <LeadsTable leads={leads} />
    </div>
  );
}
