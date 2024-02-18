'use client';
import React from 'react';
import { useModal } from './hook/useModal';
import { BaseComponentProps } from '@/core/interface';

export interface ModalProps extends Omit<BaseComponentProps, 'children'> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  className = '',
  style,
  id,
  children,
  isOpen,
  onClose,
}) => {
  const { handleOutsideClick, modalContentRef } = useModal({
    isOpen,
    onClose,
  });
  return (
    <>
      <div
        id={id}
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } flex fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 justify-center items-center transition-opacity duration-300`}
        onClick={handleOutsideClick}
      >
        <div
          className={`bg-white rounded-lg shadow-lg p-5 m-4 max-w-sm max-h-full text-gray-800 ${className}`}
          ref={modalContentRef}
          onClick={(event) => event.stopPropagation()}
          style={style}
        >
          {children}
        </div>
      </div>
    </>
  );
};
