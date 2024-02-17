import Image from 'next/image';
import React from 'react';
import { Text, Title, Typography } from '../../atoms';

export const Card = () => {
  return (
    <div className="max-w-xs flex flex-col gap-5 flex-1">
      <Image
        width={300}
        height={300}
        className="w-full h-60 object-cover rounded-lg"
        src="https://res.cloudinary.com/runyshark1/image/upload/v1707709239/IF6S_b2b4wx.gif"
        alt="placeholder"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <header>
            <Title fontSize="lg">Card Title</Title>
            <Typography>Icon</Typography>
          </header>

          <Text fontSize="base">Card Description</Text>
        </div>
        <div>
          <Text fontSize="base">Card Description</Text>
          <Text fontSize="base">Card Description</Text>
        </div>
      </div>
    </div>
  );
};
