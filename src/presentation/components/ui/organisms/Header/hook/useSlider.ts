import { useAppSelector } from '@/presentation/store';
import { useEffect, useState } from 'react';

interface SliderProps {
  time: number;
}

export const useSlider = (props: Partial<SliderProps>) => {
  const { blogData } = useAppSelector(({ web }) => web);
  const [setImage, setSetImage] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSetImage(setImage + 1);
      if (blogData.length === setImage + 1) setSetImage(0);
    }, props.time || 5000);

    return () => clearTimeout(interval);
  }, [props.time, setImage]);

  return {
    setImage,
    initialSlideImages: blogData,
    setSetImage,
  };
};
