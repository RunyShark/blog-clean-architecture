import { useEffect, useState } from 'react';

const initialSlideImages = [
  {
    img: 'images/slide-1.jpg',
    title: 'Ea id minim',
    description:
      'Consectetur enim culpa exercitation excepteur elit dolore aliquip dolor deserunt duis ea.',
  },
  {
    img: 'images/slide-2.jpg',
    title: 'Nisi sint qui',
    description: 'Irure elit ex deserunt cupidatat enim.',
  },
  {
    img: 'images/slide-3.jpg',
    title: 'Mollit non',
    description:
      'Irure incididunt voluptate veniam aliquip aliqua voluptate duis est ullamco labore.',
  },
  {
    img: 'images/slide-4.jpg',
    title: 'Id incididunt',
    description:
      'Veniam laborum fugiat reprehenderit magna ut cupidatat aute do.',
  },
  {
    img: 'images/slide-5.jpg',
    title: 'Commodo ad ',
    description:
      'Velit tempor amet adipisicing quis voluptate mollit voluptate fugiat irure incididunt ipsum.',
  },
  {
    img: 'images/slide-6.jpg',
    title: 'Holaaaaaaaaaaaaaa',
    description:
      'Tempor minim officia est eiusmod ut amet incididunt minim pariatur aliquip occaecat.',
  },
];

interface SliderProps {
  time: number;
}

export const useSlider = (props: Partial<SliderProps>) => {
  const [setImage, setSetImage] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSetImage(setImage + 1);
      if (initialSlideImages.length === setImage + 1) setSetImage(0);
    }, props.time || 5000);

    return () => clearTimeout(interval);
  }, [setImage]);
  return { setImage, initialSlideImages, setSetImage };
};
