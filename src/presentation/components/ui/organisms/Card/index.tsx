'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Text, Title, Typography } from '../../atoms';
import { BlogEntity } from '@/core/entities';
import { useAppDispatch } from '../../../../store/hooks/index';
import { setBlog } from '@/presentation/store/slices/web/web-slice';

interface CardProps {
  blogEntity: BlogEntity[];
}

export const Card: React.FC<CardProps> = ({ blogEntity }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBlog(blogEntity));
  }, []);

  return (
    <div className="max-w-xs flex flex-col gap-5 flex-1">
      <Image
        width={300}
        height={300}
        className="w-full h-60 object-cover rounded-lg"
        src="https://res.cloudinary.com/runyshark1/image/upload/v1707709239/IF6S_b2b4wx.gif"
        alt="placeholder"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <header>
            <Title fontSize="text-lg">Card Title</Title>
            <Typography>Icon</Typography>
          </header>

          <Text fontSize="text-base">Card Description</Text>
        </div>
        <div>
          <Text fontSize="text-base">Card Description</Text>
          <Text fontSize="text-base">Card Description</Text>
        </div>
      </div>
    </div>
  );
};
