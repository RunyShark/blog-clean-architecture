'use client';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Title } from '../../atoms';

export const Search = () => {
  const [input, setInput] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput('');
  };

  return (
    <form className="relative flex" onSubmit={handlerSubmit}>
      <div className="flex flex-col gap-4">
        <Title fontSize="text-lg">Buscar blog</Title>
        <div className="relative">
          <input
            type="text"
            name="input"
            value={input}
            onChange={onChange}
            className="border border-indigo-500  bg-transparent relative rounded-radius-4xl w-12 h-w-12 z-1 pl-12 py-3 block transition-all  hover:w-80 focus:w-80  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="Search for a blog post..."
          />
          <div className="absolute top-2 left-2 -z-10">
            <IoSearch className="text-indigo-700" size="30" />
          </div>
        </div>
      </div>
    </form>
  );
};
