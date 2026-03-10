import { projects } from './data/projects';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('Starting seed...');
  for (const project of projects) {
    await prisma.project.create({
      data: {
        name: project.name,
        description: project.description,
        color: project.color,
        tasks: {
          create: project.tasks,
        },
      },
    });
  }
  console.log('Your database has been seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
