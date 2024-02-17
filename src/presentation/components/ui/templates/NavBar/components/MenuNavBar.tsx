'use client';
import React, { useState } from 'react';

import { Routes } from '..';
import styles from '../navBar.module.scss';
import { ItemMenuNavBar } from './ItemMenuNavBar';

interface MenuNavBarProps {
  routes: Routes[];
}

export const MenuNavBar: React.FC<MenuNavBarProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggle}
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`}
        id="navbar-solid-bg"
      >
        <ul className={styles.nav__container}>
          {routes.map((props) => (
            <ItemMenuNavBar key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </>
  );
};
