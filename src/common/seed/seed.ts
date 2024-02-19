import prisma from '../data/prisma.client';
import { initData } from './seedData';

(async () => {
  await prisma.blog.deleteMany();

  console.log('deleted all blogs! 🗑️');

  await prisma.blog.createMany({
    data: initData,
  });

  console.log('Data seeded successfully! 🧙‍♂️ 🌱 🚀');
})();
