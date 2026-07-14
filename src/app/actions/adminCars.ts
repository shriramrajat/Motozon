"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addCar(data: {
  name: string;
  brand: string;
  price: number;
  expectedEmi: number;
  fuel: string;
  images: string;
}) {
  try {
    await prisma.car.create({
      data: {
        name: data.name,
        brand: data.brand,
        type: "Commercial",
        mileage: "TBD",
        seats: 5,
        price: data.price,
        expectedEmi: data.expectedEmi,
        fuel: data.fuel,
        images: JSON.stringify([data.images]),
        features: JSON.stringify(["Power Steering", "AC"]),
        isPublished: true,
      }
    });
    revalidatePath('/admin/cars');
    revalidatePath('/admin');
    revalidatePath('/cars');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to add car" };
  }
}

export async function toggleCarAvailability(id: string, isPublished: boolean) {
  try {
    await prisma.car.update({
      where: { id },
      data: { isPublished }
    });
    revalidatePath('/admin/cars');
    revalidatePath('/cars');
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to update availability" };
  }
}

export async function deleteCar(id: string) {
  try {
    await prisma.car.delete({
      where: { id }
    });
    revalidatePath('/admin/cars');
    revalidatePath('/admin');
    revalidatePath('/cars');
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete car" };
  }
}
