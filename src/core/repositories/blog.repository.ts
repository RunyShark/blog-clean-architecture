import { BlogDto } from '../dtos';
import { BlogEntity } from '../entities';

export abstract class BlogRepository {
  abstract create(blogDto: BlogDto): Promise<BlogEntity>;
  abstract create(): Promise<BlogEntity[]>;
}
