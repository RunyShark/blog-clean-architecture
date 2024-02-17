import { BlogEntity } from '@/core/entities';
import type { GenericUseCase } from '@/core/interface';
import { BlogRepository } from '@/core/repositories/blog.repository';

export class GetBlogUserCase implements GenericUseCase<{}, BlogEntity[]> {
  constructor(private readonly blogRepository: BlogRepository) {}
  async execute(): Promise<BlogEntity[]> {
    return await this.blogRepository.getBlogs();
  }
}
