import React from 'react';
import { Typography, TypographyProps } from '../Typography';

interface TitleProps extends TypographyProps {}

export const Title: React.FC<TitleProps> = ({ children, ...props }) => (
  <Typography elementTextType="h1" fontSize="5xl" fontWeight="bold" {...props}>
    {children}
  </Typography>
);
