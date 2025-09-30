'use client';

import {  Clock,  Star } from 'lucide-react';
import { useState } from 'react';

import styles from './Programs.module.css';

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(0);

  const ageGroups = [
    {
      title: "NURSERY",
      age: "3 Years",
      image: "/k1.png",
      description: "A nurturing foundation for your child's educational journey",
      color: "from-pink-400 to-pink-600",
      highlights: [
        "Basic social skills development",
        "Introduction to letters and numbers", 
        "Creative play and exploration",
        "Emotional development support"
      ]
    },
    {
      title: "KINDERGARTEN", 
      age: "4 Years",
      image: "/k3.png",
      description: "Building confidence through structured learning and play",
      color: "from-blue-400 to-blue-600",
      highlights: [
        "Pre-reading and writing skills",
        "Mathematical concepts introduction",
        "Social interaction enhancement",
        "Independence building activities"
      ]
    },
    {
      title: "PRE-PRIMARY",
      age: "5 Years", 
      image: "/k2.png",
      description: "Preparing for primary school with advanced learning",
      color: "from-green-400 to-green-600",
      highlights: [
        "Reading and writing proficiency",
        "Mathematical problem solving",
        "Critical thinking development",
        "School readiness preparation"
      ]
    }
  ];

  const programActivities = [
    {
      title: "Art Classes",
      description: "Engaging art classes that allow children to express their creativity and imagination through various artistic activities and projects.",
      images: ["/gen2.jpg", "/gen3.jpg", "/gen4.jpg"]
    },
    {
      title: "Music and Dance Lessons",
      description: "Experience the joy of music and dance at The White Doves Kindergarten. Our music lessons nurture a love for music and provide a foundation for musical exploration.",
      images: ["/ml.jpg", "/ml1.jpg", "/ml2.jpg"]
    },
    {
      title: "Movement & Physical Education",
      description: "We emphasize the importance of movement and physical activity. Our program includes fun activities that promote motor skills and overall well-being.",
      images: ["/mp.jpg", "/mp1.jpg", "/mp2.jpg"]
    },
    {
      title: "Language Development",
      description: "Language development is integral to a child's growth. Our activities are designed to foster communication skills and a love for language.",
      images: ["/ld.jpg", "/ld1.jpg", "/ld2.jpg"]
    },
    {
      title: "Mathematics Exploration",
      description: "Discover the wonders of mathematics through interactive and hands-on learning experiences in a fun and stimulating environment.",
      images: ["/mex.jpg", "/mex1.jpg", "/mex3.jpg"]
    },
    {
      title: "Cooking Adventures",
      description: "Fun and safe cooking activities that introduce children to basic culinary skills, healthy eating habits, and cultural appreciation through food preparation.",
      images: ["/ck.jpg", "/ck1.jpg", "/ck2.jpg"]
    }
  ];

  const dailySchedule = [
    { time: "9:00 AM", activity: "Welcome Circle & Morning Prayer" },
    { time: "9:30 AM", activity: "Language & Literacy Activities" },
    { time: "10:30 AM", activity: "Snack Time & Social Interaction" },
    { time: "11:00 AM", activity: "Mathematics Exploration" },
    { time: "12:00 PM", activity: "Lunch & Rest Time" },
    { time: "1:00 PM", activity: "Creative Arts & Music" },
    { time: "2:00 PM", activity: "Physical Education & Outdoor Play" },
    { time: "3:00 PM", activity: "Science Discovery & Nature Study" },
    { time: "3:30 PM", activity: "Closing Circle & Home Preparation" }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.mainTitle}>Our Programs</h1>
          <p className={styles.subtitle}>
            Exploring Fun & Creativity - Comprehensive educational programs designed to nurture every child's unique potential
          </p>
        </section>

        {/* Age Groups Overview */}
        <section className={styles.ageGroupsSection}>
        <h2 className={styles.sectionTitle}>Curriculum Goals</h2>
          <div className={styles.ageGroups}>
            {ageGroups.map((group, index) => (
              <div 
                key={index}
                className={`${styles.ageGroup} ${index === activeProgram ? styles.active : ''}`}
                onClick={() => setActiveProgram(index)}
              >
                <div className={styles.ageGroupHeader}>
                  <div className={styles.ageImage}>
                    <img 
                      src={group.image} 
                      alt={`${group.title} Child`} 
                      className={styles.ageImg}
                    />
                  </div>
                  <div className={styles.ageTag}>{group.age}</div>
                </div>
                
                <h3 className={styles.ageTitle}>{group.title}</h3>
                <p className={styles.ageDescription}>{group.description}</p>
                
                <ul className={styles.highlights}>
                  {group.highlights.map((highlight, i) => (
                    <li key={i} className={styles.highlight}>
                      <Star className="w-4 h-4" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Program Activities */}
        <section className={styles.activitiesSection}>
          <h2 className={styles.sectionTitle}>Our Learning Activities</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive programs designed to develop every aspect of your child's growth
          </p>
          
          <div className={styles.activities}>
            {programActivities.map((activity, index) => (
              <div 
                key={index}
                className={styles.activity}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                <div className={styles.activityContent}>
                  <h3 className={styles.activityTitle}>{activity.title}</h3>
                  <p className={styles.activityDescription}>{activity.description}</p>
                  
                  <div className={styles.imageGallery}>
                    {activity.images.map((image, i) => (
                      <div key={i} className={styles.galleryItem}>
                        <img 
                          src={image} 
                          alt={`${activity.title} ${i + 1}`} 
                          className={styles.galleryImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Schedule */}
        <section className={styles.scheduleSection}>
          <h2 className={styles.sectionTitle}>Daily Schedule</h2>
          <p className={styles.sectionSubtitle}>
            A structured yet flexible day filled with learning, play, and discovery
          </p>
          
          <div className={styles.schedule}>
            {dailySchedule.map((item, index) => (
              <div 
                key={index} 
                className={styles.scheduleItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.scheduleTime}>
                  <Clock className="w-5 h-5" />
                  {item.time}
                </div>
                <div className={styles.scheduleActivity}>
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Our Programs?</h2>
          
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={styles.feature}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Begin Your Child's Journey?</h2>
            <p className={styles.ctaDescription}>
              Join our loving community where every child is valued, nurtured, and encouraged to reach their full potential.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Enroll Now</button>
              <button className={styles.secondaryButton}>Schedule a Visit</button>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}