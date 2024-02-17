import { date } from '@/common/config/adapters';
import { BlogEntity } from '@/core/entities';

export class BlogMapper {
  static toEntity(blogDto: Record<string, any>): BlogEntity {
    const { title, author, content, imgUrl, createdAt } = blogDto;

    if ([!title, !author, !content].includes(true))
      throw new Error('Title, author and content are required');

    return new BlogEntity(title, author, content, imgUrl, date.DMY(createdAt));
  }
}
