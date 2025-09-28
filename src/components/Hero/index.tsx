import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/slide1.jpg",
      title: "Kindergarten",
      description: "Our kindergarten program provides a nurturing environment where young learners can explore, play, and grow.",
      category: "Academics"
    },
    {
      id: 2,
      image: "/child4.png",
      title: "New Curriculum",
      description: "The new curriculum is designed to foster creativity and critical thinking in students.",
      category: "Studies"
    },
    {
      id: 3,
      image: "/sports3.jpeg",
      title: "Co-curricular Activities",
      description: "Students engage in various co-curricular activities that enhance their learning experience and personal growth.",
      category: "Sports"
    },
    {
      id: 4,
      image: "/teach.jpg",
      title: "Dedicated Educators",
      description: "Teachers are the backbone of our school, inspiring and guiding students every day.",
      category: "Staff"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1600);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1600);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className={styles.heroContainer}>
      {/* Background Images with Fade Effect */}
      <div className={styles.backgroundContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slideContainer} ${
              index === currentIndex ? styles.active : styles.inactive
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
            />
            <div className={styles.slideOverlay} />
          </div>
        ))}
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.maxWidthContainer}>
          <div className={styles.contentCard}>
            <div className={styles.contentFlex}>
              
              {/* Main Content */}
              <div className={styles.mainContent}>
                
                {/* Title */}
                <h2 className={styles.title}>
                  {currentSlide.title}
                </h2>
                
                {/* Description */}
                <p className={styles.description}>
                  {currentSlide.description}
                </p>
                
                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  <button className={styles.viewGalleryBtn}>
                    View Gallery
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide Counter */}
      <div className={styles.mobileCounter}>
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Hero;