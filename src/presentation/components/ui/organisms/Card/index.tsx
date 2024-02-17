'use client';
import React from 'react';
import Image from 'next/image';
import { Text, Title, Typography } from '../../atoms';
import { BlogEntity } from '@/core/entities';
import { useAppDispatch } from '@/presentation/store';
import Link from 'next/link';
import { getByIdBlog } from '@/presentation/store/slices/web/web-slice';

export const Card: React.FC<BlogEntity> = ({
  id,
  author,
  content,
  dateOfPublication,
  imgUrl,
  title,
}) => {
  const dispatch = useAppDispatch();
  const selectedCard = () => dispatch(getByIdBlog({ id }));

  return (
    <div className="w-full flex justify-center">
      <Link
        onClick={selectedCard}
        className="md:max-w-xs flex flex-col gap-5 flex-1 cursor-pointer hover:scale-105  transition-all"
        href={`details/${title}`}
      >
        <Image
          width={300}
          height={300}
          className="w-full h-60 object-cover rounded-lg"
          src={imgUrl}
          alt="placeholder"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <header>
              <Title fontSize="text-lg">{title}</Title>
              <Typography>Icon</Typography>
            </header>

            <Text fontSize="text-base">{content}</Text>
          </div>
          <div>
            <Text fontSize="text-base">{author}</Text>
            <Text fontSize="text-base">{dateOfPublication}</Text>
          </div>
        </div>
      </Link>
    </div>
  );
};
