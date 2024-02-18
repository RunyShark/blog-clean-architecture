import { BaseComponentProps } from '@/core/interface';
import React from 'react';

interface IButtonPropsOptional extends BaseComponentProps {
  iconLeft: React.ReactElement;
  iconRight: React.ReactElement;
}
export interface ButtonProps
  extends Partial<IButtonPropsOptional>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  iconLeft,
  iconRight,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={`px-5 py-2.5 relative rounded-radius-md group font-medium text-white font-medium inline-block ${className} ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`.trim()}
    >
      <span
        className={`0 ${
          disabled
            ? 'bg-slate-600'
            : 'absolute top-0 left-0 w-full h-full rounded-radius-md opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-50'
        }`}
      />
      <span
        className={` ${
          disabled
            ? 'bg-slate-600'
            : 'h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-radius-md opacity-50 from-purple-600 to-blue-500'
        }`}
      />
      <span
        className={` ${
          disabled
            ? 'bg-slate-600'
            : 'absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-radius-md shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'
        }`}
      />
      <span
        className={` ${
          disabled
            ? 'absolute inset-0 w-full h-full transition duration-200 ease-out rounded-radius-md bg-slate-600 opacity-40'
            : 'absolute inset-0 w-full h-full transition duration-200 ease-out rounded-radius-md bg-gradient-to-br to-purple-600 from-blue-500'
        }`}
      />
      <div className="relative flex flex-row justify-between gap-5">
        {iconLeft && iconLeft}
        <span className="w-full">{children}</span>
        {iconRight && iconRight}
      </div>
    </button>
  );
};
