'use client';
import React from 'react';
import styles from './header.module.scss';
import { Text, Title, Typography } from '../../atoms';
import { useSlider } from './hook/useSlider';

export const Header = () => {
  const { initialSlideImages, setImage } = useSlider({
    time: 4500,
  });

  return (
    <div className="screen">
      <div className="w-full flex flex-col gap-16">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="py-1 ps-1.5 pe-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-teal-100  bg-teal-500/10 text-teal-500 w-16">
              <span className="w-1.5 h-1.5 inline-block rounded-full bg-teal-500"></span>
              <Typography>Blog</Typography>
            </span>

            <Title fontSize="text-4xl">Recursos</Title>
          </div>

          <Text>Las últimas noticias del sector tecnologías.</Text>
        </header>

        <div
          className={`${styles.slider} shadow-md w-full rounded-radius-2xl overflow-hidden`}
        >
          <div
            className={styles.slider__container}
            style={{
              backgroundImage: `url(${initialSlideImages[setImage].imgUrl})`,
            }}
          />
          <section className={`${styles.slider__headerContainer}`}>
            <div className="flex-1" />
            <div className="backdrop-blur-sm bg-[#000000b2]">
              <div className="screen flex flex-col gap-4">
                <Title color="white" fontSize="text-xl">
                  {initialSlideImages[setImage].title}
                </Title>
                <Typography
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  className="text-white"
                >
                  {initialSlideImages[setImage].author}
                </Typography>
                <Typography
                  fontSize="text-base"
                  className={`${styles.slider__description} ${styles.slider__lineClamp2} text-gray-300`}
                >
                  {initialSlideImages[setImage].content}
                </Typography>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
