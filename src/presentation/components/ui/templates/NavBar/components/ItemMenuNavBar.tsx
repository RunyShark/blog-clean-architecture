'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Routes } from '..';
import styles from '../navBar.module.scss';

export const ItemMenuNavBar: React.FC<Routes> = ({ name, path }) => {
  const onPath = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`${styles.nav__item} ${
          path === onPath
            ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
            : 'text-white'
        }`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
};
