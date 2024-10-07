import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Data Warehouse",
    shortDescription: "Predicting patient outcomes using routinely collected data.",
    fullDescription: "Using data routinely collected, we try to predict and enhance patient outcomes. In a first pilot, we predict whether patients on our stroke units have atrial fibrillation or not, from a routinely placed 1 Lead ECG.",
    image: "/images/project_afib.webp"
  },
  {
    id: 2,
    title: "Motus Med",
    shortDescription: "Automatic seizure detection from short videos.",
    fullDescription: "We develop a platform, where parents can send short videos of their toddlers, automatically detecting whether it is a seizure or not.",
    image: "/images/project_video_eeg.webp"
  },
  {
    id: 3,
    title: "Alveeg",
    shortDescription: "Ambulant long term video EEG monitoring.",
    fullDescription: "A prospective multicenter randomised controlled study on the diagnostic yield of ambulant long term video EEG monitoring in patients with suspected epilepsy.",
    image: "/images/project_video_eeg.webp"
  },
  {
    id: 4,
    title: "Critical Brain Dynamics",
    shortDescription: "Mathematic modeling of critical brain dynamics.",
    fullDescription: "A prospective multicenter randomised controlled study on the diagnostic yield of ambulant long term video EEG monitoring in patients with suspected epilepsy.",
    image: "/images/criticality.jpg"
  },

  {
    id: 5,
    title: "UM-EEG",
    shortDescription: "A low dimensional, universal and highly semantic Map of EEGs using deep learning.",
    fullDescription: "A prospective multicenter randomised controlled study on the diagnostic yield of ambulant long term video EEG monitoring in patients with suspected epilepsy.",
    image: "/images/project_video_eeg.webp"
  },
  {
    id: 6,
    title: "UM-EEG",
    shortDescription: "A low dimensional, universal and highly semantic Map of EEGs using deep learning.",
    fullDescription: "A prospective multicenter randomised controlled study on the diagnostic yield of ambulant long term video EEG monitoring in patients with suspected epilepsy.",
    image: "/images/project_video_eeg.webp"
  },
];

function ProjectCard({ project, isExpanded, onClick }) {
  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
      {!isExpanded?<img src={project.image} alt={project.title} />:null}
      <h3>{project.title}</h3>
      <p>{isExpanded ? project.fullDescription : project.shortDescription}</p>
    </div>
  );
}

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;