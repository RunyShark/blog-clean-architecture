import { BlogDto } from '../dtos';
import { BlogEntity } from '../entities';

export abstract class BlogDataSource {
  abstract create(blogDto: BlogDto): Promise<BlogEntity>;
  abstract getBlogs(): Promise<BlogEntity[]>;
}
