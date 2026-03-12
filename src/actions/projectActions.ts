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

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        color: true,
        tasks: {
          select: {
            status: true,
          },
        },
      },
    });

    const result = projects.map((project) => {
      const completed = project.tasks.filter(
        (task) => task.status === 'COMPLETED'
      ).length;

      const inProgress = project.tasks.filter(
        (task) => task.status === 'IN_PROGRESS'
      ).length;

      const pending = project.tasks.filter(
        (task) => task.status === 'PENDING'
      ).length;

      return {
        id: project.id,
        name: project.name,
        description: project.description ?? '',
        color: project.color,
        tasks: {
          completed,
          inProgress,
          pending,
        },
      };
    });
    return result;
  } catch (error) {
    console.error('Error getting project:', error);
    throw error;
  }
}
