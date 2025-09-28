import { Title, Image, Button, Container } from '@mantine/core';
import { useMemo } from 'react';
import styles from './Gallery1.module.css';

type Photo = {
  src: string;
  alt?: string;
  title: string;
  category: string;
};

type Gallery1Props = {
  photos?: Photo[];
  onCategoryClick?: (category: string) => void;
};

export function Gallery1({ photos, onCategoryClick }: Gallery1Props) {
  // Create category photos based on media categories
  const categoryPhotos = useMemo(() => {
    const categories = [
      { value: 'campus', label: 'Campus', src: '/build.jpg' },
      { value: 'students', label: 'Students', src: '/class.jpg' },
      { value: 'sports', label: 'Sports', src: '/sports.jpg' },
      { value: 'events', label: 'Events', src: '/grad.jpg' },
    ];

    return categories.map(category => ({
      src: category.src,
      alt: `${category.label} photos`,
      title: category.label,
      category: category.value,
    }));
  }, []);

  const handleCategoryClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  const handleViewAllClick = () => {
    if (onCategoryClick) {
      onCategoryClick('all');
    }
  };

  return (
    <section className={styles.section}>
      <Container size="lg" className={styles.container}>
        <Title order={2} className={styles.heading}>
          Recent <span>Photos</span>
        </Title>
        
        <div className={styles.deckContainer}>
          <div className={styles.deckWrapper}>
            {categoryPhotos.map((photo, index) => (
              <div
                key={index}
                className={styles.cardGroup}
                onClick={() => handleCategoryClick(photo.category)}
              >
                {[0, 1, 2].map((layer) => (
                  <div
                    key={layer}
                    className={styles.cardLayer}
                    style={{
                      transform: `translate(${layer * 1}px, ${layer * 2}px) rotate(${layer * 0.3}deg)`,
                      zIndex: layer === 0 ? 10 : 0,
                      opacity: layer === 0 ? 1 : 0.8 - layer * 0.2,
                    }}
                  >
                    {layer === 0 && (
                      <>
                        <Image
                          src={photo.src}
                          alt={photo.alt || `Gallery photo ${index + 1}`}
                          className={styles.cardImage}
                        />
                        <div className={styles.cardTitle}>
                          {photo.title}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <Button 
            variant="filled" 
            size="md" 
            radius="md"
            onClick={handleViewAllClick}
          >
            VIEW GALLERY
          </Button>
        </div>
      </Container>
    </section>
  );
}