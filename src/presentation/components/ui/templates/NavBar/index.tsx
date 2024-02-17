import React from 'react';
import { Logo } from '../../molecules';
import { MenuNavBar } from './components';
import styles from './navBar.module.scss';

export interface Routes {
  id: string;
  name: string;
  path: string;
}

const routes: Routes[] = [
  {
    id: '1',
    name: 'Home',
    path: '/blog',
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className="screen items-center">
        <Logo
          src={
            'https://res.cloudinary.com/runyshark1/image/upload/v1702264450/6828668_csmv2v.png'
          }
        />
        <MenuNavBar routes={routes} />
      </div>
    </nav>
  );
};
