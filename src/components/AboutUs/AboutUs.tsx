import React from 'react';
import { GraduationCap, Eye, Target, Heart, Award, Users, BookOpen, MapPin } from 'lucide-react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const stats = [
    { icon: <GraduationCap className="w-8 h-8" />, number: "2,500+", label: "Students" },
    { icon: <Users className="w-8 h-8" />, number: "150+", label: "Staff Members" },
    { icon: <Award className="w-8 h-8" />, number: "25+", label: "Years of Excellence" },
    { icon: <BookOpen className="w-8 h-8" />, number: "50+", label: "Programs" }
  ];

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "TOP PRIVATE UNIVERSITY IN UGANDA",
      description: "KIU has been consistently ranked among Uganda's top universities with high quality education and a diverse culture."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "DIVERSE MARKET ORIENTED COURSES",
      description: "We have a wide offering of certificate, diploma, bachelors' and masters programmes suitable for you at any point in your career."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "LARGEST TEACHING HOSPITAL",
      description: "KIU has the largest teaching and referral hospital university together which offers a variety of courses in health science."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "A FULLY EQUIPPED ULTRA-MODERN LIBRARY",
      description: "Our ultramodern library boasts of 5000+ sitting capacity, internet, a wide selection of books and online journals."
    }
  ];

  const vmmData = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the leading educational institution that shapes global citizens and innovators who contribute meaningfully to society."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide quality education that empowers students with knowledge, skills, and values necessary for personal growth and societal development."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Motto",
      description: "Excellence Through Knowledge. Striving for excellence in all we do."
    }
  ];

  const [showHeadmaster, setShowHeadmaster] = React.useState(false);
  React.useEffect(() => { setShowHeadmaster(true); }, []);

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <p className={styles.heroDescription}>
              Empowering minds, shaping futures, and building tomorrow's leaders through
              excellence in education and holistic development.
            </p>
          </div>

          {/* Stats Section */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statIcon}>
                  {stat.icon}
                </div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                {index < stats.length - 1 && (
                  <div className={styles.statSeparator}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>

          {/* Story Section */}
          <div className={styles.storySection}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Founded with a vision to transform education, our institution has been at the forefront 
                of academic excellence for over two decades. We believe in nurturing not just academic 
                prowess but also character, creativity, and critical thinking.
              </p>
              <p>
                Our commitment to innovation, combined with time-tested educational principles, 
                creates an environment where students thrive and reach their full potential.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.storyImageContainer}>
                <img 
                  src="/build.jpg" 
                  alt="School Campus" 
                  className={styles.storyImageImg}
                />
                <div className={styles.storyImageOverlay}></div>
              </div>
            </div>
          </div>

          {/* Headmaster's Message */}
          <div className={styles.headmasterSection}>
            <div className={styles.headmasterContent}>
              <div className={styles.headmasterText}>
                <h3>Message from the Headmaster</h3>
                <p>
                  "Welcome to our prestigious institution where excellence meets opportunity. 
                  For over 25 years, we have been committed to providing world-class education 
                  that prepares our students for the challenges of tomorrow."
                </p>
                <p>
                  "Our holistic approach to education ensures that every student receives 
                  personalized attention and develops both academically and personally. 
                  We are proud of our legacy and excited about our future."
                </p>
                <div className={styles.headmasterInfo}>
                  <div className={styles.headmasterName}>Dr. James Mukwaya</div>
                  <div className={styles.headmasterTitle}>Headmaster</div>
                </div>
              </div>
              <div className={`${styles.headmasterImageContainer} ${showHeadmaster ? styles['slide-in-right'] : ''}`}>
                <div className={styles.headmasterImageWrapper}>
                  <img 
                    src="/teach1.jpg" 
                    alt="Headmaster" 
                    className={styles.headmasterImageImg}
                  />
                  <div className={styles.headmasterImageOverlay}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision, Mission, Motto */}
          <div className={styles.vmmGrid}>
            {vmmData.map((item, index) => (
              <div key={index} className={styles.vmmCard}>
                <h3>{item.title}</h3>
                <p>
                  {item.description}
                </p>
                {index < vmmData.length - 1 && (
                  <div className={styles.vmmSeparator}></div>
                )}
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className={styles.featuresSection}>
            <h2 className={styles.featuresTitle}>Why Choose Us</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${styles.featureCard} ${styles['fade-in-up']}`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;