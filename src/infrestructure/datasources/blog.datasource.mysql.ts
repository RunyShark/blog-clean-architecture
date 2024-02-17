import prisma from '@/common/data/prisma.client';
import { BlogDataSource } from '@/core/datasources';
import { BlogDto } from '@/core/dtos';
import { BlogEntity } from '@/core/entities';
import { BlogMapper } from '../mappers';

export class BlogDataSourceMysql implements BlogDataSource {
  constructor() {}

  async create(blogDto: BlogDto): Promise<BlogEntity> {
    const newBlog = await prisma.blog.create({ data: blogDto });
    return BlogMapper.toEntity(newBlog);
  }

  async getBlogs(): Promise<BlogEntity[]> {
    const blogs = await prisma.blog.findMany();

    return blogs.map(BlogMapper.toEntity);
  }
}
