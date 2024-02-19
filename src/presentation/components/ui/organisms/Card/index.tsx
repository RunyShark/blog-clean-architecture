'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text, Title } from '../../atoms';
import { BlogEntity } from '@/core/entities';
import { useAppDispatch } from '@/presentation/store';
import { getByIdBlog } from '@/presentation/store/slices/web/web-slice';
import style from './card.module.scss';

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
    <div className="w-full flex justify-center ">
      <Link
        onClick={selectedCard}
        className="md:max-w-xs flex flex-col  flex-1 cursor-pointer hover:scale-105  transition-all max-h-120   overflow-hidden"
        href={`details/${title}`}
        rel="preload"
      >
        <Image
          width={300}
          height={300}
          className="w-full h-60 object-cover  rounded-tl-2xl rounded-tr-2xl "
          src={imgUrl}
          alt="placeholder"
        />
        <div className="flex flex-col gap-6 justify-between container mx-auto backdrop-blur-sm bg-[rgba(255,255,255,0.1)] p-4 rounded-bl-2xl rounded-br-2xl h-60">
          <div className="flex flex-col gap-2">
            <header className="flex flex-row gap-2">
              <Title fontSize="text-lg">{title}</Title>
            </header>

            <Text fontSize="text-base" className={style.card__lineClamp3}>
              {content}
            </Text>
          </div>
          <div>
            <Text fontSize="text-base" fontWeight="font-semibold">
              {author}
            </Text>
            <Text fontSize="text-base">{`Fecha:${dateOfPublication}`}</Text>
          </div>
        </div>
      </Link>
    </div>
  );
};
