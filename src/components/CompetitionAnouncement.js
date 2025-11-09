import React from "react";
import { Link } from "react-router-dom";
import "./CompetitionAnouncement.css";

export default function CompetitionAnouncement() {
  return (
    <section id="competition-announcement">
      <h2 className="section-title">Video-based Seizure Detection Challenge (2026)</h2>

      <div className="competition-content">
        <p>
          In partnership with <a href="https://www.aiepilepsy-neuro.com/">The International Conference on Artificial Intelligence in Epilepsy and Other Neurological Disorders (2026)</a>, 
          the <a href="https://www.computational-neurology.org">Section on Computational Neurology at Charité - Universitätsmedizin Berlin in Germany</a> and partners are organizing a video-based seizure detection challenge. 
        </p>

    <Link to="/video_challenge" className="competition-button">
      Details
    </Link>
      </div>
    </section>
  );
}
