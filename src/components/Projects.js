import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Data Warehouse",
    shortDescription: "Predicting patient outcomes using routinely collected data.",
    fullDescription: " Hospitals routinely collect a vast amount of data on their patients, ranging from laboratory test results to continuous monitoring systems like ECG and EEG. This wealth of information is stored in centralized data warehouses, creating a rich resource for clinical insights. However, the sheer volume and complexity of this data can overwhelm traditional analysis methods. By leveraging cutting-edge machine learning techniques, our team aims to transform these raw datasets into actionable intelligence, improving the accuracy, efficiency, and scalability of diagnostic processes. Our work focuses on automating the analysis of biosignals and other clinical data to enhance real-time decision-making, reduce the burden on healthcare professionals, and streamline hospital workflows. By seamlessly integrating AI models into clinical environments, we seek to drive innovation in patient care, ultimately improving outcomes and paving the way for a more data-driven healthcare future. ",
    image: "/images/project_dwc.png"
  },
  {
    id: 2,
    title: "Motus Med",
    shortDescription: "Automatic seizure detection from short videos.",
    fullDescription: <div>
    <a href="https://motusmed.de">Motus med</a> is a BIH supported project aimed at translating research done at the computational neurology lab to the clinical bedside. Motus med is a video analysis-based digital health tool intended to assist in the diagnosis and monitoring of persons with abnormal movements, seizures, or epilepsy. Videos of suspected videos are uploaded to our platform, undergo automated analysis to detect movement patterns characteristic of seizures, and can be securely shared with a specialist for additional visual review. Through motus med, we apply several vision based AI models that we have developed in the lab.  Motus med integrates with a variety of smartphones and home cameras in order to provide a device agnostic, flexible, and scalable digital solution. The analysis results are provided to users to assist in decision-making during the diagnostic stage and for ongoing monitoring and management of disease activity in persons with epilepsy.
    {/* <br />
    <a href="https://motusmed.de">Motus med</a> */}
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