import React from 'react';
import Publication from '../../../components/Publication';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function PublicationSSD2023() {
  const pdfs: [string, string][] = [['Publication 2023', 'https://aaany-assets.s3.amazonaws.com/images/2023/NY.ALIG.MAGAZINE_Final+10.09.23.pdf']];

  return (
    <>
      <Navigation />
      <Publication pdfs={pdfs} year="2023" />
      <Footer />
    </>
  );
}
