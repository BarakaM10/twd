import { Title, Image, Box, Button, Container } from '@mantine/core';
import { useMemo, useState } from 'react';
import styles from './Gallery.module.css';

type Photo = {
  src: string;
  alt?: string;
};

type GalleryProps = {
  photos: Photo[];
};

export function Gallery({ photos }: GalleryProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  // Generate random positions and rotations only once
  const messyPhotos = useMemo(() => {
    const count = photos.length;
    return photos.map((photo, index) => {
      const leftPercent = (index / (count - 1 || 1)) * 80 + 5; // 5% to 85%
      return {
        ...photo,
        top: Math.random() * 60 + 20, // px
        left: `${leftPercent}%`,
        rotate: (Math.random() - 0.5) * 30,
        zIndex: 10 + index,
      };
    });
  }, [photos]);

  return (
    <section className={styles.section}>
      <Container size="lg" className={styles.container}>
        <Title order={2} className={styles.heading}>
          Recent <span>Photos</span>
        </Title>
        <div className={styles.messyDeskWrapper}>
          {messyPhotos.map((photo, index) => (
            <div
              key={index}
              className={styles.messyPhoto}
              style={{
                top: `${photo.top}px`,
                left: photo.left,
                transform: `rotate(${photo.rotate}deg)`,
                zIndex: hovered === index ? 999 : photo.zIndex,
                transition: 'z-index 0.1s, box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Box className={styles.photoBox}>
                <Image
                  src={photo.src}
                  alt={photo.alt || `Gallery photo ${index + 1}`}
                  radius="md"
                  className={styles.photo}
                />
              </Box>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.button} variant="filled" size="md" radius="md">
            VIEW GALLERY
          </Button>
        </div>
      </Container>
    </section>
  );
}