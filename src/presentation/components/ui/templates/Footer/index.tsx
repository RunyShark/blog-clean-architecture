import React from 'react';
import { Logo } from '../../molecules';
import { Copyright, RoutesFooter } from './components';
import { Divider } from '../../atoms';

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo
              src={
                'https://res.cloudinary.com/runyshark1/image/upload/v1702264450/6828668_csmv2v.png'
              }
            />
          </div>
          <RoutesFooter />
        </div>
        <Divider />
        <Copyright />
      </div>
    </footer>
  );
};
