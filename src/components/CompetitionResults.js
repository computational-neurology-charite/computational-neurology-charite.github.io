import React from "react";
import Leaderboard from "./Leaderboard";
import "./Competition.css"; // Reuse competition base styles
import "./CompetitionResults.css";

export default function CompetitionResults() {
  return (
    <section id="competition-results">
      <h2 className="section-title">Video-based Seizure Detection Challenge (2026) — Results</h2>
      
      <div className="competition-intro">
        <p>
          We are excited to share the final results of the 2026 Video-based Seizure Detection Challenge. 
          The competition saw impressive submissions from across the globe, pushing the boundaries of automated seizure detection using pose landmarks.
        </p>
      </div>

      <div className="competition-card">
        <h3>Final Leaderboard</h3>
        <p>The ranking is based primarily on the F1 score. For teams with tied F1 scores, sensitivity was used as the secondary tie-breaker.</p>
        <p>In order to win the first or second prize at least one member of the team had to be registered for the conference, which is why the second place changed.</p>
        <p>Duplicate entries were removed.</p>
        <Leaderboard />
      </div>

      <div className="competition-card">
        <h3>About the Competition</h3>
        <p>
          Organized by the Section on Computational Neurology at Charité – Universitätsmedizin Berlin 
          in collaboration with the International Conference on Artificial Intelligence in Epilepsy and 
          Other Neurological Disorders (2026), this challenge aimed to detect infantile spasms 
          from 5-second video segments using anonymized skeleton landmarks.
        </p>
      </div>
    </section>
  );
}
