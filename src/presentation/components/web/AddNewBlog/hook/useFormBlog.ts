import { Button, Title } from '@/presentation/components/ui';
import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoCloudUpload } from 'react-icons/io5';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { usePhoto } from '@/presentation/hooks';

import { useAppDispatch, useAppSelector } from '@/presentation/store';
import {
  setLoadingState,
  updateBlogData,
} from '@/presentation/store/slices/web/web-slice';
import { createNewBlogAction } from '@/presentation/actions/web';
import { AddNewBlogFormProps } from '../components';

type Inputs = {
  title: string;
  author: string;
  content: string;
};
const schema = yup
  .object({
    title: yup
      .string()
      .min(3, 'El título debe tener por lo menos 3 caracteres')
      .required('El título es requerido'),
    author: yup
      .string()
      .min(3, 'El autor debe tener por lo menos 3 caracteres')
      .required('El autor es requerido'),
    content: yup
      .string()
      .min(10, 'El contenido debe tener por lo menos 10 caracteres')
      .required('El contenido es requerido'),
  })
  .required();

export const useFormBlog = ({ onCloseModal }: AddNewBlogFormProps) => {
  const [postBlogError, setPostBlogError] = useState('');
  const {
    fetchControl: { loading },
  } = useAppSelector(({ web }) => web);
  const dispatch = useAppDispatch();
  const { updatePhoto, file, processPreview, resetPhoto } = usePhoto();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(setLoadingState(true));
    try {
      let imgUrl = '';
      if (file) {
        const body = new FormData();
        body.append('upload_preset', 'next-blog');
        body.append('file', file);

        const response = await fetch(
          'https://api.cloudinary.com/v1_1/runyshark1/upload',
          {
            method: 'POST',
            body,
            cache: 'no-cache',
          }
        );
        const data = await response.json();

        imgUrl = data.url;
      }

      const response = await createNewBlogAction({
        imgUrl,
        ...data,
      });

      dispatch(updateBlogData(response));

      onCloseModal();
      resetPhoto();
      reset();
    } catch (error) {
      setPostBlogError('Error al guardar el blog');
    } finally {
      dispatch(setLoadingState(false));
    }
  };

  const inputElement = useRef<HTMLInputElement>(null);

  const upLoadPhoto = () => inputElement.current?.click();

  return {
    postBlogError,
    loading,
    errors,
    updatePhoto,
    processPreview,
    resetPhoto,
    upLoadPhoto,
    inputElement,
    register,
    handleSubmit,
    onSubmit,
  };
};
