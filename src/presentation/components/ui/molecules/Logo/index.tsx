import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BaseComponentProps } from '@/core/interface';
import { Title, Typography } from '../../atoms';

interface LogoProps extends Omit<BaseComponentProps, 'children'> {
  src: string;
  title?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, title = ' Blog' }) => (
  <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
      src={
        'https://res.cloudinary.com/runyshark1/image/upload/v1707709938/4XCW_utukec.gif'
      }
      width={300}
      height={300}
      className="object-contain w-20 h-14 object-center"
      alt="logo"
    />
    <Title className="self-center text-2xl font-semibold whitespace-nowrap text-white">
      {title}
    </Title>
  </Link>
);
