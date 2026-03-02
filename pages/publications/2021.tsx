import React from 'react';
import Publication from '../../components/Publication';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Publication2021() {
  const pdfs = [['Publication 2021', 'https://aaany-assets.s3.amazonaws.com/images/publications/2021/Revised+Booklet.pdf']];

  return (
    <>
      <Navigation />
      <Publication pdfs={pdfs} year="2021" />
      <Footer />
    </>
  );
}
