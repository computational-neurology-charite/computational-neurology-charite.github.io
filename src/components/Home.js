import React from 'react';

function Home() {
  return (
    <section id="home">
      <h2 className="section-title">Home</h2>
      <p>Welcome to the Computational Neurology research group. Our mission is to leverage computational techniques to advance the understanding and treatment of neurological disorders.</p>
      <div className="principles-container">
        <div className="principle-card">
          <img src="/images/interdisciplinary.webp" alt="Interdisciplinary Research" className="principle-image" />
          <h3>Interdisciplinary</h3>
          <p>Our approach combines insights from various scientific fields to innovate and enhance neurological research and treatments.</p>
        </div>
        {/* Add other principle cards here */}
      </div>
    </section>
  );
}

export default Home;