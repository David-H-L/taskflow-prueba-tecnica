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

export async function getProjectWithTasks(projectId: string) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,

        tasks: {
          select: {
            id: true,
            title: true,
            description: true,
            status: true,
            priority: true,
          },
        },
      },
    });

    return project;
  } catch (error) {
    console.error('Error getting project with tasks:', error);
    throw error;
  }
}

export async function updateNameDescriptionProject(
  id: string,
  name: string,
  description: string
) {
  try {
    const project = await prisma.project.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
      },
    });

    return project;
  } catch (error) {
    console.error('Error updating task status:', error);
    throw error;
  }
}

export async function deleteProject(id: string) {
  try {
    const project = await prisma.project.delete({
      where: {
        id: id,
      },
    });

    return project;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
}
