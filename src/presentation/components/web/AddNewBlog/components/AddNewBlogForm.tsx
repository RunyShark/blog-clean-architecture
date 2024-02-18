import { Button } from '@/presentation/components/ui';
import React, { ChangeEventHandler, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoCloudUpload } from 'react-icons/io5';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { usePhoto } from '@/presentation/hooks';

type Inputs = {
  title: string;
  author: string;
  content: string;
};
const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    content: yup.string().required('Content is required'),
  })
  .required();

interface AddNewBlogFormProps {
  onCloseModal: () => void;
}

export const AddNewBlogForm: React.FC<AddNewBlogFormProps> = ({
  onCloseModal,
}) => {
  const { updatePhoto, file, processPreview, resetPhoto } = usePhoto();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onCloseModal();
    resetPhoto();
    reset();
  };

  const inputElement = useRef<HTMLInputElement>(null);

  const upLoadPhoto = () => inputElement.current?.click();

  return (
    <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="hs-pro-dalpn"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Foto o gift blog
            </label>

            <div className="mt-2 flex items-center gap-x-3">
              <span className="flex justify-center items-center h-20 w-20 border-2 border-dotted border-gray-300 text-gray-400 rounded-full dark:border-neutral-700 dark:text-neutral-600">
                {updatePhoto ? (
                  <Image
                    src={updatePhoto}
                    alt="preview"
                    width={100}
                    height={100}
                    className="rounded-full object-contain object-center w-full h-full"
                  />
                ) : (
                  <svg
                    className="flex-shrink-0 w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                )}

                <input
                  onChange={processPreview}
                  className="opacity-0 hidden"
                  type="file"
                  ref={inputElement}
                />
              </span>

              <div>
                <Button
                  type="button"
                  iconLeft={<IoCloudUpload size={25} />}
                  onClick={upLoadPhoto}
                >
                  Selecionar foto
                </Button>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              Title
            </label>
            <div className="relative">
              <input
                type="text"
                {...register('title')}
                className="border border-indigo-500  bg-transparent relative rounded-radius-4xl w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
              />
              <p className="text-error-600">{errors.title?.message}</p>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              author
            </label>
            <div className="relative">
              <input
                type="text"
                {...register('author')}
                className="border border-indigo-500  bg-transparent relative rounded-radius-4xl w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
              />
              <p className="text-error-600"> {errors.author?.message}</p>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-800">
              content
            </label>
            <div className="relative">
              <textarea
                style={{ resize: 'none' }}
                {...register('content')}
                className="border border-indigo-500 h-40  bg-transparent relative rounded-radius-4xl w-full h-w-12 z-1 px-5 py-2 block transition-all   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
              />
              <p className="text-error-600">{errors.content?.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-end gap-x-2">
        <button
          onClick={onCloseModal}
          type="button"
          className="px-5 py-2.5 h-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          data-hs-overlay="#hs-pro-dasadpm"
        >
          Cancel
        </button>

        <Button className="h-10" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
};
