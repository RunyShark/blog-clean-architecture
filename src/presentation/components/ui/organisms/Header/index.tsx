'use client';
import React from 'react';
import styles from './header.module.scss';
import { Typography } from '../../atoms';
import { useSlider } from './hook/useSlider';

export const Header = () => {
  const { initialSlideImages, setImage, setSetImage } = useSlider({
    time: 4500,
  });

  return (
    <>
      <div className={`${styles.slider} shadow-md`}>
        <div
          className={styles.slider__container}
          style={{
            backgroundImage: `url(${initialSlideImages[setImage].img})`,
          }}
        />
        <header className={`${styles.slider__headerContainer}`}>
          <div className="flex-1" />
          <div className="backdrop-blur-sm">
            <div className="screen flex flex-col gap-4">
              <Typography className={styles.slider__text}>
                {initialSlideImages[setImage].title}
              </Typography>
              <Typography className={styles.slider__text}>
                {initialSlideImages[setImage].description}
              </Typography>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
