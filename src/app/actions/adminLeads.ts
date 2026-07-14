"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateLeadStatus(id: string, status: string) {
  try {
    await prisma.lead.update({
      where: { id },
      data: { status }
    });
    revalidatePath('/admin/leads');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to update status" };
  }
}
