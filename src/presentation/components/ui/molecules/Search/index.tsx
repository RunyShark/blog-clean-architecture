'use client';
import React, { useState } from 'react';
import { IoTrash, IoSearch } from 'react-icons/io5';
import { Title } from '../../atoms';
import { useAppDispatch } from '@/presentation/store';
import {
  clearFilter,
  filterBlog,
} from '@/presentation/store/slices/web/web-slice';
import { Button } from '../Button';
import { useAppSelector } from '../../../../store/hooks/index';

export const Search = () => {
  const { isActiveFilter } = useAppSelector(({ web }) => web);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterBlog(input));
    setInput('');
  };

  const clearFilters = () => {
    dispatch(clearFilter());
  };

  return (
    <form className="relative flex" onSubmit={handlerSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-6">
          <Title fontSize="text-lg">Buscar blog</Title>
          {isActiveFilter && (
            <Button
              className="max-w-48 h-11"
              iconLeft={<IoTrash size={25} />}
              onClick={clearFilters}
            >
              Eliminar filtros
            </Button>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            name="input"
            value={input}
            onChange={onChange}
            className="text-white border border-indigo-500  bg-transparent relative rounded-radius-4xl w-12 h-w-12 z-1 pl-12 py-3 block transition-all  hover:w-80 focus:w-80  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="Search for a blog post..."
          />
          <div className="absolute top-2 left-2 -z-10">
            <IoSearch className="text-indigo-400" size="30" />
          </div>
        </div>
      </div>
    </form>
  );
};
