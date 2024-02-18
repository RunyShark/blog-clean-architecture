'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ModalProps } from '..';

export const useModal = ({ isOpen, onClose }: ModalProps) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const closeModal = () => onClose();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      modalContentRef.current &&
      !(modalContentRef.current as HTMLElement).contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return {
    closeModal,
    handleOutsideClick,
    modalContentRef,
  };
};
