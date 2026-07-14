"use server";

import { prisma } from "@/lib/prisma";

export async function submitLead(data: { name: string; phone: string; type: string; notes?: string }) {
  try {
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        type: data.type,
        notes: data.notes || '',
      }
    });
    return { success: true, leadId: lead.id };
  } catch (error) {
    console.error("Lead submission error:", error);
    return { success: false, error: "Failed to submit lead" };
  }
}
