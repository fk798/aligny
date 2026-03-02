import React from 'react';
import Gallery from '../../../components/Gallery';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function Picnic() {
  const images = [
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.21+AM.jpeg' },
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(1).jpeg' }, 
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(2).jpeg' }, 
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(3).jpeg' }, 
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(4).jpeg' }, 
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM+(5).jpeg' }, 
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.22+AM.jpeg' }, 
    { original: 'https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Image+2024-07-19+at+10.53.23+AM.jpeg' }, 
  ];

  return (
    <>
      <Navigation />
      <Gallery images={images} title="AAANY Picnic 2024" year="2024" />
      
      <section className="section-sm">
        <div className="container-aaany" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Event Video</h3>
          <div className="video-wrapper">
            <iframe 
              src="https://aaany-assets.s3.amazonaws.com/2024/amu+picnic+2024/WhatsApp+Video+2024-07-19+at+10.53.22+AM.mp4" 
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="AAANY Picnic 2024 Video"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
