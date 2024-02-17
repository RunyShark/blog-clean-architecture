import { Validator } from '@/common/helpers';
import { CustomError } from '@/core/errors';

export class BlogDto {
  private constructor(
    public title: string,
    public author: string,
    public content: string,
    public imgUrl?: string
  ) {}

  static create(object: Record<string, any>): [CustomError?, BlogDto?] {
    const { title, author, content, imgUrl } = object;

    if (!title || Validator.isString(title))
      return [CustomError.badRequest('Title is required')];

    if (!author || Validator.isString(author)) {
      return [CustomError.badRequest('Author is required')];
    }

    if (!content || Validator.isString(content)) {
      return [CustomError.badRequest('Content is required')];
    }

    return [, new BlogDto(title, author, content, imgUrl)];
  }
}
