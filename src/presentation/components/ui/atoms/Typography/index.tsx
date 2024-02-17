import { BaseComponentProps } from '@/core/interface';
import React, { createElement } from 'react';

interface TypographyProps extends Omit<BaseComponentProps, 'children'> {
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ children, ...props }) =>
  createElement('p', { ...props }, children);
