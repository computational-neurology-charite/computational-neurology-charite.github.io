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
    fullDescription: <div>
    We develop a platform, where parents can send short videos of their toddlers, automatically detecting whether it is a seizure or not.
    <br />
    <a href="https://motusmed.de">https://motusmed.de</a>
    </div>,
    image: "/images/motusmed.png"
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
    fullDescription: "The brain's ability to process and integrate information across spatial and temporal domains is central to intact cognitive function. Physics and information theory have provided a framework describing an optimal state of information processing. This critical state, poised at the phase transition between chaotic and ceasing neuronal activity, is characterized by an equilibrium between excitation and inhibition in the neuronal network. When a network of neurons operates near a critical phase transition point, a range of information processing functions, including information transmission, integration, storage, dynamic range, and sensitivity to inputs, are optimized simultaneously. While criticality provides a precise framework linking network structure to dynamics, its central claim, that critical dynamics predicts optimal network and thus cognitive function in humans, has not been proven yet. To try to fill this gap by investigating multi-model cortical measurements, e.g., MRI and iEEG, together with cognitive performance evaluation.",
    image: "/images/criticality.jpg"
  },

  // {
  //   id: 5,
  //   title: "UM-EEG",
  //   shortDescription: "A low dimensional, universal and highly semantic Map of EEGs using deep learning.",
  //   fullDescription: "A prospective multicenter randomised controlled study on the diagnostic yield of ambulant long term video EEG monitoring in patients with suspected epilepsy.",
  //   image: "/images/project_video_eeg.webp"
  // },
  // {
  //   id: 6,
  //   title: "UM-EEG",
  //   shortDescription: "A low dimensional, universal and highly semantic Map of EEGs using deep learning.",
  //   fullDescription: "A prospective multicenter randomised controlled study on the diagnostic yield of ambulant long term video EEG monitoring in patients with suspected epilepsy.",
  //   image: "/images/project_video_eeg.webp"
  // },
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