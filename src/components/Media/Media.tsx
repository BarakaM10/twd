import React, { useState, useEffect } from 'react';
import styles from './Media.module.css';
import { Calendar, MapPin, X } from 'lucide-react';

// Defining the MediaImage interface
interface MediaImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  date: string;
  photographer?: string;
  location: string;
}

// Defining the Category interface
interface Category {
  value: string;
  label: string;
}

interface MediaProps {
  initialFilter?: string;
}

const Media: React.FC<MediaProps> = ({ initialFilter }) => {
  const [selectedImage, setSelectedImage] = useState<MediaImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Update filter when initialFilter changes
  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

  const mediaImages: MediaImage[] = [
    {
      id: 1,
      src: "/build.jpg",
      title: "Modern Campus Architecture",
      description: "Our state-of-the-art campus building showcasing contemporary design and sustainable architecture that creates an inspiring learning environment.",
      category: "campus",
      date: "2024-03-15",
      photographer: "John Doe",
      location: "Main Campus"
    },
    {
      id: 2,
      src: "/teach.jpg",
      title: "Excellence in Teaching",
      description: "Dedicated educators bringing knowledge to life through interactive and engaging teaching methodologies that inspire student success.",
      category: "campus",
      date: "2024-02-20",
      photographer: "Jane Smith",
      location: "Lecture Hall A"
    },
    {
      id: 3,
      src: "/class.jpg",
      title: "Student Life & Activities",
      description: "Vibrant campus life with diverse extracurricular activities, fostering personal growth and lifelong friendships among our student community.",
      category: "students",
      date: "2024-01-10",
      location: "Student Center"
    },
    {
      id: 4,
      src: "/lab.jpg",
      title: "Research & Innovation",
      description: "Cutting-edge research facilities and laboratories where students and faculty collaborate on groundbreaking discoveries and innovations.",
      category: "campus",
      date: "2024-03-01",
      location: "Research Lab"
    },
    {
      id: 5,
      src: "/sports.jpg",
      title: "Sports & Recreation",
      description: "World-class sports facilities promoting physical fitness and competitive excellence, supporting our athletes in achieving their dreams.",
      category: "sports",
      date: "2024-02-14",
      location: "Sports Complex"
    },
    {
      id: 6,
      src: "/lib.jpg",
      title: "Library & Learning Resources",
      description: "Our comprehensive library with extensive digital and physical resources, providing students with access to knowledge from around the world.",
      category: "campus",
      date: "2024-01-25",
      location: "Main Library"
    },
    {
      id: 7,
      src: "/grad.jpg",
      title: "Graduation Ceremonies",
      description: "Celebrating academic achievements and new beginnings as our graduates embark on their professional journeys with pride and accomplishment.",
      category: "events",
      date: "2024-03-20",
      location: "Auditorium"
    },
    {
      id: 8,
      src: "/charity.jpg",
      title: "Community Outreach",
      description: "Giving back to the community through various outreach programs and initiatives that make a positive impact on society.",
      category: "events",
      date: "2024-02-28",
      location: "Community Center"
    }
  ];

  const categories: Category[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'campus', label: 'Campus' },
    { value: 'students', label: 'Students' },
    { value: 'sports', label: 'Sports' },
    { value: 'events', label: 'Events' },
  ];

  // Fixed filtering logic
  const filteredImages = filter === 'all' 
    ? mediaImages 
    : mediaImages.filter((img: MediaImage) => img.category === filter);

  const openModal = (image: MediaImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Add cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.mediaContainer}>
      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`${styles.filterBtn} ${filter === category.value ? styles.active : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className={styles.mediaSection}>
        <div className={styles.mediaGrid}>
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={styles.mediaCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image)}
              >
                <div className={styles.imageContainer}>
                  <img src={image.src} alt={image.title} />
                  <div className={styles.imageOverlay}>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{image.title}</h3>
                  <p className={styles.cardDescription}>{image.description}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      <span>{new Date(image.date).toLocaleDateString()}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <MapPin className={styles.metaIcon} />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              padding: '3rem', 
              color: '#6b7280' 
            }}>
              <p>No images found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <X />
            </button>
            
            <div className={styles.modalImageContainer}>
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;