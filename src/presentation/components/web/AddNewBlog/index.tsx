'use client';
import React, { useState } from 'react';
import { Button, Modal } from '../../ui';
import { IoHome } from 'react-icons/io5';

export const AddNewBlog = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  return (
    <div>
      <Button
        className="w-60"
        iconLeft={<IoHome size={25} />}
        onClick={openModal}
      >
        Agregar nuevo blog
      </Button>
      <Modal isOpen={isOpenModal} onClose={closeModal} />
    </div>
  );
};
