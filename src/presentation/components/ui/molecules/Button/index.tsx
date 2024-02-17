import { BaseComponentProps } from '@/core/interface';
import React from 'react';
import { Typography } from '../../atoms';

interface IButtonPropsOptional extends BaseComponentProps {
  iconLeft: React.ReactElement;
  iconRight: React.ReactElement;
}
export interface ButtonProps
  extends Partial<IButtonPropsOptional>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  iconLeft,
  iconRight,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="px-5 py-2.5 relative rounded-radius-md group font-medium text-white font-medium inline-block"
    >
      <span className="absolute top-0 left-0 w-full h-full rounded-radius-md opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-radius-md opacity-50 from-purple-600 to-blue-500"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-radius-md shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-radius-md bg-gradient-to-br to-purple-600 from-blue-500"></span>
      <div className="relative flex flex-row justify-between gap-5">
        {iconLeft && iconLeft}
        {children}
        {iconRight && iconRight}
      </div>
    </button>
  );
};
