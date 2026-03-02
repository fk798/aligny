import React from 'react';
import Head from 'next/head';
import { Carousel } from 'react-bootstrap';

interface GalleryProps {
  images: Array<{ original: string }>;
  title: string;
  year?: string;
}

export default function Gallery({ images, title, year }: GalleryProps) {
  return (
    <>
      <Head>
        <title>{title} — AAANY Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Gallery{year ? ` · ${year}` : ''}</span>
          <h1>{title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-aaany">
          <Carousel variant="dark" indicators={true} interval={4000}>
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                  <img 
                    src={image.original} 
                    alt={`${title} - Photo ${idx + 1}`} 
                    className="gallery-carousel"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '70vh', 
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: 'var(--shadow-md)'
                    }} 
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
