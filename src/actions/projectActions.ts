'use server';
import { prisma } from '@/lib/prisma';

export async function getNumberProjects() {
  try {
    const number = await prisma.project.count();
    return number;
  } catch (error) {
    console.error('Error getting project count:', error);
    throw error;
  }
}
