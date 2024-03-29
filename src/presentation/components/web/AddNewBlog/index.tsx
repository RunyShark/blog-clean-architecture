'use client';
import React, { useState } from 'react';
import { Button, Modal, Title } from '../../ui';
import { IoAdd } from 'react-icons/io5';
import { AddNewBlogForm } from './components';
import { useAppSelector } from '@/presentation/store';

export const AddNewBlog = () => {
  const {
    fetchControl: { isOnline },
  } = useAppSelector(({ web }) => web);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);

  return (
    <div>
      <Button
        disabled={!isOnline}
        className="w-60"
        iconLeft={<IoAdd size={25} />}
        onClick={openModal}
      >
        Agregar nuevo blog
      </Button>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Title fontSize="text-xl">Nuevo blog</Title>
        <hr className="my-2 sm:mx-auto border-gray-700" />
        <AddNewBlogForm onCloseModal={closeModal} />
      </Modal>
    </div>
  );
};
