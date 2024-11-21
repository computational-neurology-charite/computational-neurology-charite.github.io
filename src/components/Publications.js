import React, { useState, useEffect } from 'react';
import bibtexParse from 'bibtex-parse-js';
import './Publications.css';
import { sanitizeLatex } from '../utils/sanitizeLatex';

function Publications() {
  const [publications, setPublications] = useState([]);
  const [expandedPub, setExpandedPub] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAndParseBibTeX = async () => {
      try {
        const response = await fetch('/publications.bib');
        const bibtexText = await response.text();
        const parsed = bibtexParse.toJSON(bibtexText);
        const formatted = parsed.map(entry => ({
          id: entry.citationKey,
          title: sanitizeLatex(entry.entryTags.title),
          authors: entry.entryTags.author,
          journal: sanitizeLatex(entry.entryTags.journal),
		book: sanitizeLatex(entry.entryTags.booktitle),
          year: entry.entryTags.year,
          doi: entry.entryTags.doi,
          url: entry.entryTags.url,
          abstract: sanitizeLatex(entry.entryTags.abstract),
          entryType: entry.entryType,
		  publisher: entry.entryTags.publisher,
		  volume: entry.entryTags.volume,
		  pages: entry.entryTags.pages,
 
          // Add more fields as needed
        }));
        
        setPublications(formatted);
      } catch (error) {
        console.error('Error fetching or parsing BibTeX file:', error);
      }
    };

    fetchAndParseBibTeX();
  }, []);


  // Group filtered publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.year || 'Unknown Year';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

  const handleExpand = (id) => {
    setExpandedPub(prev => (prev === id ? null : id));
  };

  return (
    <section id="publications">
      <h2 className="section-title">Publications</h2>    
      {sortedYears.map(year => (
        <div key={year} className="year-section">
          <h3>{year}</h3>
          <div className="year-container">
            {publicationsByYear[year].map(pub => (
              <div
                key={pub.id}
                className={`publication-card ${expandedPub === pub.id ? 'expanded' : ''}`}
                onClick={() => handleExpand(pub.id)}
              >
                <h4>{pub.title}</h4>
                <p style={{color:"grey", marginBottom:"20px", marginTop:"20px"}}>{pub.authors}</p>
                <p><i>{pub.journal || 'Preprint'}</i></p>
                <body className='more-text'>{expandedPub === pub.id ? '' : 'More...'}</body>
                {expandedPub === pub.id && (
                  <>
                    {pub.abstract && (
                      <p><strong>Abstract:</strong> {pub.abstract}</p>
                    )}
                    {pub.doi && (
                      <p>
                        <strong>DOI:</strong> <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a>
                      </p>
                    )}
                    {pub.url && (
                      <p>
                        <strong>URL:</strong> <a href={pub.url} target="_blank" rel="noopener noreferrer">View Publication</a>
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Publications;
