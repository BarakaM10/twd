'use client';

import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, ImageIcon, Tag, X } from 'lucide-react';
import styles from './Gallery.module.css';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  alt: string;
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const imagesPerPage = 12; // Changed to 12 for better grid layout

  // Sample gallery data - replace with your actual data
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/fun.jpg', title: 'Game Time', category: 'Physical Education', alt: 'Children playing' },
    { id: 2, src: '/ml.jpg', title: 'Music Time', category: 'Music & Dance', alt: 'Children with instruments' },
    { id: 3, src: '/mp.jpg', title: 'Physical Activity', category: 'Physical Education', alt: 'Children playing sports' },
    { id: 4, src: '/ld.jpg', title: 'Story Reading', category: 'Language Development', alt: 'Teacher reading to children' },
    { id: 5, src: '/mex.jpg', title: 'Math Exploration', category: 'Mathematics', alt: 'Children learning math' },
    { id: 6, src: '/ck.jpg', title: 'Cooking Class', category: 'Life Skills', alt: 'Children cooking' },
    { id: 7, src: '/fun1.jpg', title: 'Game Time', category: 'Physical Education', alt: 'Children playing' },
    { id: 8, src: '/ml1.jpg', title: 'Dance Performance', category: 'Music & Dance', alt: 'Children dancing' },
    { id: 9, src: '/mp1.jpg', title: 'Outdoor Games', category: 'Physical Education', alt: 'Children playing outside' },
    { id: 10, src: '/ld1.jpg', title: 'Letter Learning', category: 'Language Development', alt: 'Alphabet activities' },
    { id: 11, src: '/mex1.jpg', title: 'Number Games', category: 'Mathematics', alt: 'Math games' },
    { id: 12, src: '/ck1.jpg', title: 'Baking Fun', category: 'Life Skills', alt: 'Children baking' },
    { id: 13, src: '/fun2.jpg', title: 'Game Time', category: 'Physical Education', alt: 'Children playing' },
    { id: 14, src: '/ml2.jpg', title: 'Rhythm Class', category: 'Music & Dance', alt: 'Percussion instruments' },
    { id: 15, src: '/mp2.jpg', title: 'Yoga Session', category: 'Physical Education', alt: 'Children doing yoga' },
    { id: 16, src: '/ld2.jpg', title: 'Writing Practice', category: 'Language Development', alt: 'Children writing' },
    { id: 17, src: '/mex3.jpg', title: 'Shape Discovery', category: 'Mathematics', alt: 'Geometric shapes' },
    { id: 18, src: '/ck2.jpg', title: 'Healthy Snacks', category: 'Life Skills', alt: 'Preparing healthy food' },
    { id: 19, src: '/fc.jpg', title: 'Swings', category: 'Facilities', alt: 'The facilities' },
    { id: 20, src: '/fc1.jpg', title: 'Entrance', category: 'Facilities', alt: 'The facilities' },
    { id: 21, src: '/fc4.jpg', title: 'Classroom', category: 'Facilities', alt: 'The facilities' },
    { id: 22, src: '/fc7.jpg', title: 'Classroom', category: 'Facilities', alt: 'The facilities' },
    { id: 23, src: '/ml.jpg', title: 'Musical Instruments', category: 'Music & Dance', alt: 'Learning music' },
    { id: 24, src: '/mp.jpg', title: 'Sports Day', category: 'Physical Education', alt: 'Active play time' },
    { id: 25, src: '/ld.jpg', title: 'Reading Circle', category: 'Language Development', alt: 'Story time together' },
    { id: 26, src: '/mex.jpg', title: 'Number Fun', category: 'Mathematics', alt: 'Math activities' },
    { id: 27, src: '/ck.jpg', title: 'Kitchen Skills', category: 'Life Skills', alt: 'Learning to cook' },
    { id: 29, src: '/ml1.jpg', title: 'Movement Class', category: 'Music & Dance', alt: 'Dancing together' },
    { id: 30, src: '/mp1.jpg', title: 'Playground Time', category: 'Physical Education', alt: 'Outdoor activities' },
    { id: 31, src: '/ld1.jpg', title: 'Phonics Practice', category: 'Language Development', alt: 'Sound learning' },
    { id: 32, src: '/mex1.jpg', title: 'Counting Games', category: 'Mathematics', alt: 'Number recognition' },
    { id: 33, src: '/ck1.jpg', title: 'Table Setting', category: 'Life Skills', alt: 'Life skills practice' },
    { id: 34, src: '/gen.jpg', title: 'Cultural Day', category: 'Culture', alt: 'culture' },
    { id: 35, src: '/gen1.jpg', title: 'Cultural Day', category: 'Culture', alt: 'culture' },
    { id: 36, src: '/gen2.jpg', title: 'Cultural Day', category: 'Culture', alt: 'culture' },
    { id: 37, src: '/gen3.jpg', title: 'Cultural Day', category: 'Culture', alt: 'culture' },
    { id: 38, src: '/gen4.jpg', title: 'Cultural Day', category: 'Culture', alt: 'culture' },
  ];

  const categories = ['All', 'Music & Dance', 'Physical Education', 'Life Skills', 'Facilities'];

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return galleryImages;
    }
    return galleryImages.filter(image => image.category === activeCategory);
  }, [activeCategory, galleryImages]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // Reset to first page when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of gallery
    const galleryElement = document.querySelector(`.${styles.gallery}`);
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Handle image click to open modal
  const handleImageClick = (image: GalleryImage) => {
    const imageIndex = filteredImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setSelectedIndex(imageIndex);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
    // Restore body scrolling
    document.body.style.overflow = 'unset';
  };

  // Navigate to previous image in modal
  const goToPreviousImage = () => {
    if (selectedIndex > 0) {
      const prevImage = filteredImages[selectedIndex - 1];
      setSelectedImage(prevImage);
      setSelectedIndex(selectedIndex - 1);
    }
  };

  // Navigate to next image in modal
  const goToNextImage = () => {
    if (selectedIndex < filteredImages.length - 1) {
      const nextImage = filteredImages[selectedIndex + 1];
      setSelectedImage(nextImage);
      setSelectedIndex(selectedIndex + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        switch (e.key) {
          case 'Escape':
            closeModal();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            goToPreviousImage();
            break;
          case 'ArrowRight':
            e.preventDefault();
            goToNextImage();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, filteredImages.length]);

  // Handle modal background click
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Generate page numbers for pagination
  const getVisiblePageNumbers = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* Filter Section */}
        <div className={styles.filterSection}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.active : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
        </div>

        {/* Gallery Grid */}
        <div className={styles.gallery}>
          {currentImages.length === 0 ? (
            <div className={styles.emptyState}>
              <ImageIcon className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>No images found</h3>
              <p className={styles.emptyDescription}>
                Try selecting a different category to view more photos.
              </p>
            </div>
          ) : (
            currentImages.map((image, index) => (
              <div 
                key={`${image.id}-${index}`} 
                className={styles.galleryItem}
                onClick={() => handleImageClick(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(image);
                  }
                }}
                aria-label={`View ${image.title} in fullscreen`}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.galleryImage}
                    loading="lazy"
                  />
                  
                  <div className={styles.imageInfo}>
                    <h3 className={styles.imageTitle}>{image.title}</h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredImages.length > imagesPerPage && (
          <div className={styles.paginationSection}>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={styles.paginationButton}
              aria-label="Go to previous page"
            >
              <ChevronLeft style={{ width: '1rem', height: '1rem' }} />
              Previous
            </button>
            
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {getVisiblePageNumbers().map((pageNum, index) => (
                <div key={`page-${index}`}>
                  {pageNum === '...' ? (
                    <span className={styles.paginationInfo}>...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(pageNum as number)}
                      className={`${styles.paginationButton} ${
                        currentPage === pageNum ? styles.active : ''
                      }`}
                      aria-label={`Go to page ${pageNum}`}
                      aria-current={currentPage === pageNum ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
              aria-label="Go to next page"
            >
              Next
              <ChevronRight style={{ width: '1rem', height: '1rem' }} />
            </button>
          </div>
        )}

        {/* Pagination Info */}
        {filteredImages.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p className={styles.paginationInfo}>
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}

      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className={`${styles.modal} ${selectedImage ? styles.open : ''}`}
          onClick={handleModalClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close fullscreen view"
            >
              <X style={{ width: '1.2rem', height: '1.2rem' }} />
            </button>
            
            <button 
              className={`${styles.navigationButton} ${styles.prevButton}`}
              onClick={goToPreviousImage}
              disabled={selectedIndex <= 0}
              aria-label="View previous image"
            >
              <ChevronLeft style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
            
            <button 
              className={`${styles.navigationButton} ${styles.nextButton}`}
              onClick={goToNextImage}
              disabled={selectedIndex >= filteredImages.length - 1}
              aria-label="View next image"
            >
              <ChevronRight style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
            
            <div className={styles.modalInfo}>
              <h3 id="modal-title" className={styles.modalTitle}>
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}