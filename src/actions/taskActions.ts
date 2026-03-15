'use server';
import { Prisma } from '@/generated/prisma/client';
import { prisma } from '@/lib/prisma';
import { Status } from '@/types';

export async function getNumberTasks() {
  try {
    const number = await prisma.task.count();
    return number;
  } catch (error) {
    console.error('Error getting task count:', error);
    throw error;
  }
}

export async function getTasks() {
  try {
    const tasks = await prisma.task.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
    });

    const order = ['PENDING', 'IN_PROGRESS', 'COMPLETED'];
    const result = order.map((status) => {
      const found = tasks.find((t) => t.status === status);

      const color =
        status === 'PENDING'
          ? 'bg-red-500'
          : status === 'IN_PROGRESS'
            ? 'bg-blue-500'
            : 'bg-green-500';

      return {
        label: status.replace('_', ' '),
        value: found?._count.status ?? 0,
        color,
      };
    });

    return result;
  } catch (error) {
    console.error('Error getting task:', error);
    throw error;
  }
}

export async function getLastTasks() {
  try {
    const data = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
      select: {
        title: true,
        status: true,
        priority: true,
        createdAt: true,
        project: {
          select: {
            name: true,
          },
        },
      },
    });

    const result = data.map((task) => ({
      taskName: task.title,
      projectName: task.project.name,
      createAt: task.createdAt,
      state: task.status,
      priority: task.priority,
    }));

    return result;
  } catch (error) {
    console.error('Error getting last tasks:', error);
    throw error;
  }
}

export async function getPendingProjectTasks() {
  try {
    const projects = await prisma.project.findMany({
      take: 3,
      select: {
        name: true,
        _count: {
          select: {
            tasks: true,
          },
        },
        tasks: {
          where: {
            status: 'PENDING',
          },
          select: {
            id: true,
          },
        },
      },
    });

    const result = projects.map((project) => ({
      name: project.name,
      totalTask: project._count.tasks,
      pending: project.tasks.length,
    }));

    return result;
  } catch (error) {
    console.error('Error getting pending project tasks:', error);
    throw error;
  }
}

export async function createTask(data: Prisma.TaskCreateInput) {
  try {
    const task = await prisma.task.create({
      data,
    });

    return task;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}

export async function updateTask(id: string, data: Prisma.TaskUpdateInput) {
  try {
    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data,
    });

    return task;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
}

export async function deleteTask(id: string) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: id,
      },
    });

    return task;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
}

export async function updateTaskStatus(id: string, status: Status) {
  try {
    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    return task;
  } catch (error) {
    console.error('Error updating task status:', error);
    throw error;
  }
}
