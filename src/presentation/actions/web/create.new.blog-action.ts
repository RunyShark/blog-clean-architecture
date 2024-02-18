'use server';

import prisma from '@/common/data/prisma.client';
import { BlogDto } from '@/core/dtos';
import { PostBlogUserCase } from '@/core/use-cases/web/post.blog.user-case';
import { BlogDataSourceMysql } from '@/infrestructure/datasources';
import { BlogRepositoryMysql } from '@/infrestructure/repositories';

export const createNewBlogAction = async (blogDto: BlogDto) =>
  await new PostBlogUserCase(
    new BlogRepositoryMysql(new BlogDataSourceMysql(prisma))
  ).execute(blogDto);
