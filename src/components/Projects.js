import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Computational Inpatient Monitoring",
    shortDescription: "Predicting patient outcomes using routinely collected data",
    fullDescription: "The increasing availability of multimodal and continuous 'physiomes' of neurological patients through digital neuromonitoring, new sensor and wearable technologies paired with advanced data analytics offer opportunities for a fundamental transformation in neurology. For inpatient monitoring in intensive care, stroke medicine and epilepsy computational neurology provides vast opportunities for the development of predictive diagnostic methods for specific and time-critical therapies. By leveraging cutting-edge machine learning techniques, our team aims to transform the raw datasets into actionable intelligence, improving the accuracy, efficiency, and scalability of diagnostic processes. Our work focuses on automating the analysis of biosignals and other clinical data to enhance real-time decision-making, reduce the burden on healthcare professionals, and streamline hospital workflows. By seamlessly integrating AI models into clinical environments, we seek to drive innovation in patient care, ultimately improving outcomes and paving the way for a more data-driven healthcare future.",
    image: "/images/project_dwc.png"
  },
  {
    id: 2,
    title: "Computational Ambulatory Monitoring",
    shortDescription: "Predicting patient outcomes using routinely collected data",
    fullDescription: "Enabled by new, wearable sensors and computational analysis, objective methods for continuous, longitudinal monitoring and risk assessments provide opportunities for a fundamental medical transformation towards personalized, proactive and time-critical therapies in the outpatient setting.",
	image: "/images/Fig_Wearable_DL.jpg"
  },
   {
    id: 3,
    title: "Critical Dynamics in Brain Networks",
    shortDescription: "Criticality as the optimal set-point of network dynamics",
    fullDescription: "The brain's ability to process and integrate information across spatial and temporal domains is central to intact cognitive function. Physics and information theory have provided a framework describing an optimal state of information processing. This critical state, poised at the phase transition between chaotic and ceasing neuronal activity, is characterized by an equilibrium between excitation and inhibition in the neuronal network. When a network of neurons operates near a critical phase transition point, a range of information processing functions, including information transmission, integration, storage, dynamic range, and sensitivity to inputs, are optimized simultaneously. While criticality provides a precise framework linking network structure to dynamics, its central claim, that critical dynamics predicts optimal network and thus cognitive function in humans, has not been proven yet. To try to fill this gap by investigating multi-model cortical measurements, e.g., MRI and iEEG, together with cognitive performance evaluation.",
    image: "/images/criticality.jpg"
  },
  
  {
    id: 4,
    title: "Critical Dynamics in Artificial Intelligence Networks",
    shortDescription: "Deep learning performs optimally at criticality",
    fullDescription: "Deep Neural Networks (DNNs) have revolutionized numerous fields, yet their training and design remain challenging due to vast parameter spaces and limited theoretical understanding. We here aim to bridge the gap between neuroscience and artificial intelligence to unlock the full potential of these networks. Our research demonstrates how insight from neurology, biology and physics can innovate and enhance modern DNNs and training methods. Conversely, advancements in AI offer valuable perspectives that deepen our understanding of biological neural processes. We believe that combining ideas from neuroscience and AI is essential to exploring new frontiers in both disciplines.",
    image: "/images/critical_artificial_nn.png"
  },
  {
    id: 5,
    title: "motus med",
    shortDescription: "Transforming the epilepsy diagnostic pathway through accessible & intelligent movement analysis",
    fullDescription: <div>
    <a href="https://motusmed.de">motus med</a> is a video analysis-based digital health tool intended to assist in the diagnosis and monitoring of persons with abnormal movements, seizures, or epilepsy. Videos of suspected videos are uploaded to our platform, undergo automated analysis to detect movement patterns characteristic of seizures, and can be securely shared with a specialist for additional visual review. Through motus med, we apply several vision based AI models that we have developed in the lab.  Motus med integrates with a variety of smartphones and home cameras in order to provide a device agnostic, flexible, and scalable digital solution. The analysis results are provided to users to assist in decision-making during the diagnostic stage and for ongoing monitoring and management of disease activity in persons with epilepsy.
    {/* <br />
    <a href="https://motusmed.de">Motus med</a> */}
    </div>,
    image: "/images/motusmed.png"
  },
  {
    id: 6,
    title: "ALVEEG",
    shortDescription: "Ambulatory long-term video-EEG monitoring",
    fullDescription: 
    <div>
  <a href="https://www.alveeg.de">ALVEEG</a> is a prospective, multicentre, randomized and controlled intervention study. In Germany, people with seizure disorders often have to wait months for a long-term video-EEG which is traditionally only performed in specialized hospitals. This can greatly delay the correct diagnosis and treatment. New sensor technologies and data analysis supported by artificial intelligence are opening up new diagnostic approaches. The aim of the project is to improve the care of people with seizure disorders by providing access to long-term video-EEGs in the home setting.
    </div>,
    image: "/images/project_alveeg.jpg"
  },
{
    id: 7,
    title: "Medical Edge AI",
    shortDescription: "M/EDGE",
    fullDescription: "With their close integration of programmable microelectronics, sensors and actuators, modern medical devices have opened up fundamentally new diagnostic and therapeutic possibilities. These devices require integration of artificial intelligence and autonomy directly in the medical device, i.e. medical edge computing. Together with partners from academia, med tech and semiconductor industries, the M/EDGE project aims to develop an electronics platform for highly integrated medical edge artificial intelligence.",
    image: "/images/medge-logo.png"
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
      <p>{isExpanded ? project.fullDescription : project.shortDescription }</p>
      {!isExpanded?<body className="more-text">More...</body>:null}
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
