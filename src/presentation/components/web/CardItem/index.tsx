'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { BlogEntity } from '@/core/entities';
import { setBlog } from '@/presentation/store/slices/web/web-slice';
import { useAppDispatch, useAppSelector } from '@/presentation/store';
import { Card, LottieCustom, Text, Title, Typography } from '../../ui';
import Animation from '../../../../common/json/Animation.json';
interface CardProps {
  blogEntity: BlogEntity[];
}

export const CardItem: React.FC<CardProps> = ({ blogEntity }) => {
  const { filterBlog } = useAppSelector(({ web }) => web);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBlog(blogEntity));
  }, []);

  return (
    <>
      {filterBlog.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16">
          {filterBlog.map((blog) => (
            <Card {...blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1">
          <div className="p-4 bg-[rgba(255,250,240,0.2)] text-warning-500 rounded-lg">
            <Title fontSize="text-lg">No se encontró resultado 😵‍💫</Title>
          </div>
          <LottieCustom
            lottiefile={Animation}
            autoplay
            loop={true}
            width={600}
            height={600}
          />
        </div>
      )}
    </>
  );
};
