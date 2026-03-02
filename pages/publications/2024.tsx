import React from 'react';
import Publication from '../../components/Publication';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Publication2024() {
  const pdfs: [string, string][] = [['Publication 2024', 'https://aaany-assets.s3.us-east-1.amazonaws.com/2024/2024+Oct_MAGAZINE_SSDAY.pdf']];

  return (
    <>
      <Navigation />
      <Publication pdfs={pdfs} year="2024" />
      <Footer />
    </>
  );
}
