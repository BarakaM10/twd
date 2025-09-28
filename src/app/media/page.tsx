'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Media from '../../components/Media/Media';
import { NavTop } from '../../components/Header/NavTop';
import { Footer } from '../../components/Footer/Footer';

function MediaContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';

  return <Media initialFilter={category} />;
}

export default function MediaPage() {
  return (
    <div>
      <NavTop />
      <Suspense fallback={<div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        fontSize: '1.2rem',
        color: '#6b7280'
      }}>Loading...</div>}>
        <MediaContent />
      </Suspense>
      <Footer />
    </div>
  );
}