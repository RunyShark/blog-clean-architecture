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
    <div className="screen">
      <div className="w-full flex flex-col gap-16">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Typography className={styles.slider__text}>Our blog</Typography>
            <Typography className={styles.slider__text}>
              Resources and insights
            </Typography>
          </div>

          <Typography className={styles.slider__text}>
            The latest industry news, interviews, technologies, and resources.
          </Typography>
        </header>

        <div
          className={`${styles.slider} shadow-md w-full rounded-radius-2xl overflow-hidden`}
        >
          <div
            className={styles.slider__container}
            style={{
              backgroundImage: `url(${initialSlideImages[setImage].img})`,
            }}
          />
          <section className={`${styles.slider__headerContainer}`}>
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
          </section>
        </div>
      </div>
    </div>
  );
};
