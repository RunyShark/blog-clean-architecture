import { BlogRepository } from '@/core/repositories/blog.repository';
import { BlogDto } from '@/core/dtos';
import { BlogEntity } from '@/core/entities';
import { BlogDataSource } from '@/core/datasources';

export class BlogRepositoryMysql implements BlogRepository {
  constructor(private readonly blogDataSource: BlogDataSource) {}

  create(blogDto: BlogDto): Promise<BlogEntity> {
    return this.blogDataSource.create(blogDto);
  }

  getBlogs(): Promise<BlogEntity[]> {
    return this.blogDataSource.getBlogs();
  }
}
