import { Priority, TaskStatus } from '@/generated/prisma/enums';

//Note: Here you can see a few example data entries.
// Feel free to change them to examples in your own language
// Currently, I have created three projects with five tasks for each project.

export const projects = [
  {
    name: 'TaskFlow App',
    description: 'Project to manage tasks efficiently',
    color: '#6366f1',
    tasks: [
      {
        title: 'Setup Next.js project',
        description: 'Initialize project with Next.js and TypeScript',
        status: TaskStatus.COMPLETED,
        priority: Priority.HIGH,
      },
      {
        title: 'Configure Prisma',
        description: 'Connect Prisma with PostgreSQL',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.HIGH,
      },
      {
        title: 'Design database schema',
        description: 'Define models and relationships',
        status: TaskStatus.COMPLETED,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Create project dashboard UI',
        description: 'Implement UI components for projects',
        status: TaskStatus.PENDING,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Implement task CRUD',
        description: 'Create API routes to manage tasks',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.HIGH,
      },
    ],
  },

  {
    name: 'Personal Productivity',
    description: 'Organize personal daily activities',
    color: '#22c55e',
    tasks: [
      {
        title: 'Morning workout',
        description: '30 minutes of cardio exercise',
        status: TaskStatus.PENDING,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Read a programming book',
        description: 'Read at least 20 pages',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.LOW,
      },
      {
        title: 'Plan weekly goals',
        description: 'Write goals for the upcoming week',
        status: TaskStatus.COMPLETED,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Clean workspace',
        description: 'Organize desk and remove distractions',
        status: TaskStatus.PENDING,
        priority: Priority.LOW,
      },
      {
        title: 'Practice coding challenges',
        description: 'Solve at least 2 algorithm problems',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.HIGH,
      },
    ],
  },

  {
    name: 'Learning Backend Development',
    description: 'Improve backend development skills',
    color: '#f59e0b',
    tasks: [
      {
        title: 'Learn Prisma ORM',
        description: 'Understand migrations, models, and relations',
        status: TaskStatus.COMPLETED,
        priority: Priority.HIGH,
      },
      {
        title: 'Study PostgreSQL indexing',
        description: 'Learn how indexes improve query performance',
        status: TaskStatus.IN_PROGRESS,
        priority: Priority.MEDIUM,
      },
      {
        title: 'Build REST API',
        description: 'Create endpoints for projects and tasks',
        status: TaskStatus.PENDING,
        priority: Priority.HIGH,
      },
      {
        title: 'Implement authentication',
        description: 'Add login and JWT authentication',
        status: TaskStatus.PENDING,
        priority: Priority.HIGH,
      },
      {
        title: 'Write backend tests',
        description: 'Add unit and integration tests',
        status: TaskStatus.PENDING,
        priority: Priority.MEDIUM,
      },
    ],
  },
];
