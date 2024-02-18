import prisma from '@/common/data/prisma.client';
import { GetBlogUserCase } from '@/core/use-cases/web/get.blog.user-case';
import { BlogDataSourceMysql } from '@/infrestructure/datasources';
import { BlogRepositoryMysql } from '@/infrestructure/repositories';
import React from 'react';
import { Card } from '../../ui';
import { CardItem } from '../CardItem';

const getBlog = async () =>
  await new GetBlogUserCase(
    new BlogRepositoryMysql(new BlogDataSourceMysql(prisma))
  ).execute();

export const CardBlog = async () => <CardItem blogEntity={await getBlog()} />;
