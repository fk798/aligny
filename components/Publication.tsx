import React from 'react';
import Head from 'next/head';

interface PublicationProps {
  year: string;
  pdfs: Array<[string, string]>;
}

export default function Publication({ year, pdfs }: PublicationProps) {
  return (
    <>
      <Head>
        <title>The New York Alig — {year}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-header">
        <div className="container-aaany">
          <span className="section-label">Publications · {year}</span>
          <h1>The New York Alig</h1>
          <p>Sir Syed Day Magazine {year}</p>
        </div>
      </div>

      <div className="content-section" style={{ maxWidth: '900px' }}>
        {pdfs.map((elem, idx) => (
          <div key={idx} style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{elem[0]}</h3>
            <embed 
              src={elem[1]} 
              className="pdf-embed"
              style={{ width: '100%', height: '80vh' }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
