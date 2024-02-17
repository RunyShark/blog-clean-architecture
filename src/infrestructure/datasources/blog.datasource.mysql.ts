import prisma from '@/common/data/prisma.client';
import { BlogDataSource } from '@/core/datasources';
import { BlogDto } from '@/core/dtos';
import { BlogEntity } from '@/core/entities';
import { BlogMapper } from '../mappers';

export abstract class BlogDataSourceMysql implements BlogDataSource {
  constructor(private readonly db: typeof prisma) {}

  async create(blogDto: BlogDto): Promise<BlogEntity> {
    const newBlog = await this.db.blog.create({ data: blogDto });

    return BlogMapper.toEntity(newBlog);
  }

  async getBlogs(): Promise<BlogEntity[]> {
    const blogs = await this.db.blog.findMany();

    return blogs.map((blog) => BlogMapper.toEntity(blog));
  }
}
