import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';

interface GalleryProps {
  images: Array<{ original: string }>;
  title: string;
  year?: string;
}

export default function Gallery({ images, title, year }: GalleryProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  if (total === 0) return null;

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
          <div className="carousel">
            <div className="carousel-viewport">
              <img
                src={images[current].original}
                alt={`${title} - Photo ${current + 1}`}
                className="carousel-image"
              />
            </div>

            {total > 1 && (
              <>
                <button
                  className="carousel-btn carousel-btn-prev"
                  onClick={prev}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  className="carousel-btn carousel-btn-next"
                  onClick={next}
                  aria-label="Next photo"
                >
                  ›
                </button>
                <div className="carousel-counter">
                  {current + 1} / {total}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
