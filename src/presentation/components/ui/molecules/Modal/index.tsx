'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useModal } from './hook/useModal';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { closeModal, handleOutsideClick, modalContentRef } = useModal({
    isOpen,
    onClose,
  });
  return (
    <>
      <div
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } flex fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40 justify-center items-center transition-opacity duration-300`}
        onClick={handleOutsideClick}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-5 m-4 max-w-sm max-h-full text-gray-800"
          ref={modalContentRef}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4">
            <h3 className="text-lg font-bold">Modal title</h3>
          </div>
          <div className="mb-8">
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="button"
              className="ml-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
