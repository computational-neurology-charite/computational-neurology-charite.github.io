import React from "react";
import { Link } from "react-router-dom";
import "./CompetitionAnouncement.css";

export default function CompetitionAnouncement() {
  return (
    <section id="competition-announcement">
      <h2 className="section-title">Video-Seizure Competition 2026</h2>

      <div className="competition-content">
        <p>
          In partnership with The International Conference on Artificial Intelligence in Epilepsy and Other Neurological Disorders (2026), 
          the Section on Computational Neurology at Charité - Universitätsmedizin Berlin in Germany and partners are organizing a video-based seizure detection challenge. 
        </p>

    <Link to="/video_challenge" className="competition-button">
      Details
    </Link>
      </div>
    </section>
  );
}
