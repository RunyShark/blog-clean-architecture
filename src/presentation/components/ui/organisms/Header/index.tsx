'use client';
import React from 'react';
import styles from './header.module.scss';
import { Text, Title, Typography } from '../../atoms';
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
            <span className="py-1 ps-1.5 pe-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500 w-16">
              <span className="w-1.5 h-1.5 inline-block bg-teal-800 rounded-full dark:bg-teal-500"></span>
              <Typography>Blog</Typography>
            </span>

            <Title>Resources and insights</Title>
          </div>

          <Text>
            The latest industry news, interviews, technologies, and resources.
          </Text>
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
                <Text color="white">{initialSlideImages[setImage].title}</Text>
                <Typography
                  fontSize="text-base"
                  className={styles.slider__text}
                >
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
