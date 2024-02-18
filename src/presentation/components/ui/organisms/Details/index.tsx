'use client';
import React from 'react';
import { useAppSelector } from '@/presentation/store';
import Image from 'next/image';
import { Text, Title, Typography } from '../../atoms';
import { Button } from '../../molecules';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';

export const Details = () => {
  const { author, content, dateOfPublication, imgUrl, title } = useAppSelector(
    (state) => state.web.blogSelected
  );
  return (
    <div className="flex flex-col gap-16 mb-16 ">
      <div className="flex gap-9 w-320 justify-between w-full">
        <div className="w-1/2">
          <header className="h-full flex flex-col gap-10 justify-center w-full">
            <Title className="font-bold">{title}</Title>
            <div>
              <div className="flex gap-2 flex-col">
                <Typography
                  elementTextType="h2"
                  fontWeight="font-semibold"
                  fontSize="text-lg"
                >
                  {author}
                </Typography>
                <div className="flex flex-row gap-2">
                  <Typography
                    elementTextType="p"
                    fontWeight="font-semibold"
                    fontSize="text-lg"
                  >
                    Publicación en:
                  </Typography>
                  <Typography elementTextType="span" fontSize="text-lg">
                    {dateOfPublication}
                  </Typography>
                </div>
              </div>
            </div>
            <Link href="/">
              <Button className="w-1/2" iconLeft={<IoHome size={25} />}>
                Regresar al home
              </Button>
            </Link>
          </header>
        </div>

        <Image
          className="w-1/2 h-120 bg-cover bg-center rounded-radius-2xl"
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
