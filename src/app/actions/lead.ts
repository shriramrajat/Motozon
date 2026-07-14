"use server";

import { PrismaClient } from "@prisma/client";

// In a real app, you'd instantiate this in a separate lib file to avoid multiple instances in dev
// but for the scope of this project, this is fine or we can use globalThis
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

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
