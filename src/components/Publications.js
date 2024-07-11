import React, { useState, useEffect } from 'react';

function Publications() {
  const [publications, setPublications] = useState({});

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const fetchPublications = async () => {
      // Simulating API call
      const pubs = {
        '2024': [
          { title: 'Publication 1', authors: 'Author 1, Author 2', journal: 'Journal 1' },
        ],
        '2023': [
          { title: 'Publication 2', authors: 'Author 3, Author 4', journal: 'Journal 2' },
        ],
        // Add other years and publications
      };
      setPublications(pubs);
    };

    fetchPublications();
  }, []);

  return (
    <section id="publications">
      <h2 className="section-title">Publications</h2>
      {Object.entries(publications).sort(([a], [b]) => b - a).map(([year, pubs]) => (
        <div key={year} className="year-section">
          <h3>{year}</h3>
          <div className="year-container">
            {pubs.map((pub, index) => (
              <div key={index} className="publication-card">
                <h4>{pub.title}</h4>
                <p>{pub.authors}</p>
                <p>{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Publications;