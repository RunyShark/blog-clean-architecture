'use client';
import React from 'react';
import { store } from '../store';
import { BaseComponentProps } from '@/core/interface';
import { Provider } from 'react-redux';

export const ReduxProvider: React.FC<Pick<BaseComponentProps, 'children'>> = ({
  children,
}) => <Provider store={store}>{children}</Provider>;
