import { BlogDto } from '@/core/dtos';
import { BlogEntity } from '@/core/entities';
import type { GenericUseCase } from '@/core/interface';
import { BlogRepository } from '@/core/repositories/blog.repository';

export class PostBlogUserCase implements GenericUseCase<BlogDto, BlogEntity> {
  constructor(private readonly blogRepository: BlogRepository) {}
  async execute(blogDto: BlogDto): Promise<BlogEntity> {
    return await this.blogRepository.create(blogDto);
  }
}
