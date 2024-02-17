import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BaseComponentProps } from '@/core/interface';
import { Typography } from '../../atoms';

interface LogoProps extends Omit<BaseComponentProps, 'children'> {
  src: string;
  title?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, title = ' Blog' }) => (
  <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
      src={src}
      width={300}
      height={300}
      className="h-10 object-contain w-10 object-center"
      alt="logo"
    />
    <Typography className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      {title}
    </Typography>
  </Link>
);
