import React from 'react';
import Publication from '../../components/Publication';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Publication2022() {
  const pdfs = [['Publication 2022', 'https://aaany-assets.s3.amazonaws.com/2022/publications/2022+Booklet.pdf']];

  return (
    <>
      <Navigation />
      <Publication pdfs={pdfs} year="2022" />
      <Footer />
    </>
  );
}
