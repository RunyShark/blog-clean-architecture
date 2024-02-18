'use client';
import React from 'react';
import { useAppSelector } from '@/presentation/store';
import Image from 'next/image';
import { Text, Title } from '../../atoms';
import { Button } from '../../molecules';
import Link from 'next/link';

export const Details = () => {
  const { author, content, dateOfPublication, imgUrl, title } = useAppSelector(
    (state) => state.web.blogSelected
  );
  return (
    <div className="flex flex-col gap-16 mb-16 ">
      <div className="flex gap-9 w-320 justify-between">
        <div className="w-full">
          <header className="h-full flex flex-col gap-10 justify-center">
            <Title className="font-bold">{title}</Title>
            <div>
              <div className="flex-1">
                <h2>{author}</h2>
                <h3>{dateOfPublication}</h3>
              </div>
            </div>
            <Link href="/">
              <Button className="w-1/2">Regresar al home</Button>
            </Link>
          </header>
        </div>

        <Image
          className="w-full h-120 bg-cover bg-center rounded-radius-2xl"
          src={imgUrl}
          alt="placeholder"
          width={500}
          height={500}
        />
      </div>

      <Text>{content}</Text>
    </div>
  );
};
