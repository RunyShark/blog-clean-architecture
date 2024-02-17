import React from 'react';
import { Typography, TypographyProps } from '../Typography';

interface TextProps extends TypographyProps {}

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <Typography elementTextType="p" fontSize="xl" color="#475467" {...props}>
    {children}
  </Typography>
);
