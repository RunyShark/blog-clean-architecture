'use client';
import { BaseComponentProps } from '@/core/interface';
import React from 'react';
import { useInternetConnection } from '../hooks';

export const InternetConnectionProvider: React.FC<
  Pick<BaseComponentProps, 'children'>
> = ({ children }) => {
  useInternetConnection();
  return children;
};
