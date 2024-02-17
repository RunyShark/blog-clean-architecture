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
  fontSize: Size<
    ValidSize,
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  >;
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
  fontSize = 'md',
  style,
  textAlign,
  elementTextType = 'span',
  ...props
}) =>
  createElement(
    elementTextType,
    {
      className: `text-${fontSize} font-${fontWeight} ${className}`,
      style: {
        textAlign,
        color,
        ...style,
      },
      ...props,
    },
    children
  );
