import {
  BaseComponentProps,
  Color,
  Size,
  TextAlign,
  ValidSize,
} from '@/core/interface';
import React, { createElement } from 'react';

type ElementTextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

interface Props
  extends BaseComponentProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {
  color: Color;
  textAlign: TextAlign;
  fontWeight: FontWeight;
  fontSize:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
  elementTextType: ElementTextType;
}
export interface TypographyProps extends Partial<Props> {
  children: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className = '',
  color,
  fontWeight = 'normal',
  fontSize = 'text-sm',
  style,
  textAlign,
  elementTextType = 'span',
  ...props
}) =>
  createElement(
    elementTextType,
    {
      className: `${fontSize} font-${fontWeight} ${className}`,
      style: {
        textAlign,
        color,
        ...style,
      },
      ...props,
    },
    children
  );
