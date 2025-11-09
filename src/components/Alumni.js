import React from "react";
import "./Alumni.css";

const alumniNames = [
  "Dr. Amrit Kashyap (Postdoc)",
  "Jessica Hochwald (Bachelor's Thesis)",
  "Paul Müller (Dr. rer. nat.)",
  "Dr. Gadi Miron (Postdoc)",
  "Lida Antonakopoulou (Internship)",
  "Agustina Aragon Daud (Internship)",
  "Lily Strittmatter (Bachelor's Thesis)",
  "Mert Akgül (Bachelor's Thesis)",
  "Mario Andina (Doctoral Thesis)",
  "Georg von Arnim (Working Student)",
];

export default function Alumni() {
  return (
    <section id="alumni">
      <h2 className="section-title">Alumni</h2>

      <div className="alumni-card">
        <img
          src="/images/logo_group.webp"
          alt="Lab logo"
          className="alumni-logo"
        />

        <ul className="alumni-list">
          {alumniNames.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        {/* If you want roles/years later, add a small muted line here */}
        {/* <p className="alumni-note">2019–2024 cohorts</p> */}
      </div>
    </section>
  );
}
