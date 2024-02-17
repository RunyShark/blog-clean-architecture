'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { BlogEntity } from '@/core/entities';
import { setBlog } from '@/presentation/store/slices/web/web-slice';
import { useAppDispatch } from '@/presentation/store';
import { Card, Text, Title, Typography } from '../../ui';

interface CardProps {
  blogEntity: BlogEntity[];
}

export const CardItem: React.FC<CardProps> = ({ blogEntity }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBlog(blogEntity));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16">
      {blogEntity.map((blog) => (
        <Card {...blog} key={blog.id} />
      ))}
    </div>
  );
};
