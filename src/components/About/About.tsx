'use client';

import Image from 'next/image';
import { GraduationCap, Flag, MapPin, ChevronLeft, ChevronRight, Clock, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

import styles from './About.module.css';

export default function AboutSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const vmmData = [
  
    {
      icon: <GraduationCap/>,
      title: "Vision",
      description: " Creating a christian based learning environment where excellence is expected of every child.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Flag/>,
      title: "Mission",
      description: " To provide each child with a strong foundation to learn and grow loving, caring and safe environment that encourages their development physically, spiritually, emotionally, socially and intellectually.To develop critical thinking skills in each child.",
      color: "from-blue-400 to-blue-600"
    },
    
  ];

  const testimonials = [
    {
      title: "Choosing The White Doves Kindergarten for our child has been one of the best decisions we've made. The dedication of the teachers and the welcoming atmosphere make it a top-notch educational institution.",
      content: "Emma's Mom",
      rating: 5,
      image: "/wd.jpg"
    },
    {
      title: "The White Doves Kindergarten has been a wonderful place for our child to learn and grow. The caring staff and enriching environment have made a positive impact on our family.",
      content: "Sarah's Mum", 
      rating: 5,
      image: "/wd4.jpg"
    },
    {
      title: "We are grateful for the exceptional education and nurturing care our child receives at The White Doves Kindergarten. It's a place where children truly blossom.",
      content: "Michael's Dad",
      rating: 5,
      image: "/wd3.jpg"
    }
  ];

  const programs = [
    {
      title: "NURSERY",
      age: "3 Years",
      image: "/k1.png",
      description: "The Nursery program provides a nurturing and stimulating environment for children aged 3 years. We focus on the holistic development of each child, encouraging curiosity and a love for learning.",
    },
    {
      title: "KINDERGARTEN", 
      age: "4 Years",
      image: "/k3.png",
      description: "Our Kindergarten program fosters exploration and discovery in 4-year-olds. We provide a supportive, engaging learning environment that prepares children for their educational journey ahead.",
    },
    {
      title: "PRE-PRIMARY",
      age: "5 Years", 
      image: "/k2.png",
      description: "In Pre-primary, 5-year-olds embark on advanced learning. We build essential academic skills while nurturing each child's unique talents and preparing them for primary school.",
    }
  ];

  const photos = [
    { src: "/wd6.jpg", alt: "Children playing in the classroom" },
    { src: "/wd5.jpg", alt: "Students engaged in learning activities" },
    { src: "/wd3.jpg", alt: "Hands-on cooking session" },
    { src: "/wd2.jpg", alt: "Food and cooking session" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section aria-labelledby="about-title" className={styles.wrapper}>
      <div className={styles.container}>
      {/* Contact Info Header */}
      <section className={styles.toppings}>
        <div className={styles.mid1}>
          <div className={styles.contactIcon}>
            <MapPin className="w-6 h-6" />
          </div>
          <p className={styles.up}>Location</p> 
          <p className={styles.mid}>Plot 444, Bukoto Moyo Cl, Kampala</p> 
          <p className={styles.bottom}>
            <a href='https://maps.app.goo.gl/Ukmh6S1iPn3KAvQd8'>Visit Us 📍</a>
          </p> 
        </div>
        <div className={styles.mid2}>
          <div className={styles.contactIcon}>
            <Clock className="w-6 h-6" />
          </div>
          <p className={styles.up}>Open Hours</p> 
          <p className={styles.mid}>Mon-Fri 9:00am-4:00pm</p> 
          <p className={styles.mid}>Saturday 9:00am-1:00pm</p> 
        </div>
      </section>
        {/* Vision, Mission, Values */}
        <section className={styles.vmmSection}>
          <h2 className={styles.mainTitle}>Foundation</h2>
          <div className={styles.vmmGrid}>
            {vmmData.map((item, index) => (
              <div 
                key={index} 
                className={styles.vmmCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${styles.vmmIcon} bg-gradient-to-br ${item.color}`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className={styles.programsSection}>
          <header className={styles.header}>
            <h2 className={styles.mainTitle}>Our Curriculum</h2>
            <p className={styles.subtitle}>Explore our education options for different ages</p>
          </header>

          <div className={styles.programs}>
            {programs.map((program, index) => (
              <div 
                key={index}
                className={styles.program}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={styles.programHeader}>
                  <div className={styles.toon}>
                    <img 
                      src={program.image} 
                      alt={`${program.title} Child`} 
                      className={styles.progImage}
                    />
                  </div>
                  <div className={styles.ageTag}>Age {program.age}</div>
                </div>
                
                <h3>{program.title}</h3>
                <p className={styles.detail}>{program.description}</p>
                
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialSection}>
          <h2 className={styles.mainTitle}>What Parents Say</h2>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <button 
                className={`${styles.navButton} ${styles.navPrev}`}
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className={styles.testimonialMedia}>
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 1024px), 100vw"
                  className={styles.mediaImg}
                  key={currentTestimonial} 
                />
              </div>
              
              <div className={styles.testimonialBody}>
                <div className={styles.rating}>
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${styles.starFilled}`} />
                  ))}
                </div>
                <blockquote className={styles.testimonialText}>
                  {testimonials[currentTestimonial].title}
                </blockquote>
                <cite className={styles.testimonialAuthor}>
                  — {testimonials[currentTestimonial].content}
                </cite>
              </div>

              <button 
                className={`${styles.navButton} ${styles.navNext}`}
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial indicators */}
            <div className={styles.testimonialIndicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className={styles.photosSection}>
          <h2 className={styles.mainTitle}>Our Happy Moments</h2>
          <p className={styles.subtitle}>Glimpses of joy, learning, and growth</p>
          
          <div className={styles.photosGrid}>
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className={styles.photoItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={styles.photoImg}
                />
                <div className={styles.photoOverlay}>
                  <span className={styles.photoCaption}>{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>View More</div>
        </section>
      </div>
    </section>
  );
}