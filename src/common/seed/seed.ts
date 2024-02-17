import prisma from '../data/prisma.client';
import { initData } from './seedData';

(async () => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'development') return;

  await prisma.blog.deleteMany();

  console.log('deleted all blogs! 🗑️');

  await prisma.blog.createMany({
    data: initData,
  });

  console.log('Data seeded successfully! 🧙‍♂️ 🌱');
})();
