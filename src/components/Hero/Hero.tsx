import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface HeroSlide {
  id: number;
  image: string;
  heading: string;
  subheading?: string;
}

const HeroSection: React.FC = () => {
  const slides: HeroSlide[] = [
    {
      id: 1,
      image: '/wd1.jpg',
      heading: 'Get the best education for your child',
      subheading: 'Nurturing minds, building futures'
    },
    {
      id: 2,
      image: '/wd2.jpg',
      heading: 'Discover your potential with us',
      subheading: 'Excellence in every classroom'
    },
    {
      id: 3,
      image: '/wd6.jpg',
      heading: 'Innovation meets tradition',
      subheading: "Preparing tomorrow's leaders today"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slideContainer}>
        <div
          className={styles.slideTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <div
                className={styles.slideBg}
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h1 className={styles.heading}>{slide.heading}</h1>
                {slide.subheading && (
                  <p className={styles.subheading}>{slide.subheading}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className={`${styles.arrow} ${styles.left}`} onClick={goPrev}>
          ❮
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={goNext}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
