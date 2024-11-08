import React, { useState, useEffect } from 'react';
import './Team.css';
const membersData = [
  { name: 'Prof Christian Meisel', 
    role: 'Principal Investigator', 
    image: 'images/logo_group.webp',
    desc: ''
  },
  // { name: 'Agustina Aragon Daud', 
  //   role: 'Pre-Doctoral Intern', 
  //   image: '/images/team/agustina.jpeg',
  //   desc: "Agustina is a Pre-Doctoral Research Intern at the Bernstein Center for Computational Neuroscience Berlin. She graduated with honors from Psychology with a focus in Neuroscience from Universidad Favaloro, in Buenos Aires, Argentina. Her current research involves using machine learning for predictive time series analysis in epilepsy, utilizing both iEEG and ECG data."
  // },
  { name: 'Alexander Nelde', 
    role: 'PhD Student', 
    image: '/images/team/alex.jpg',
    desc: ""
  },
  { name: 'Amrit Kashyap', 
    role: 'Postdoc', 
    image: '/images/team/amrit.jpg',
    desc: ""
  },
  { name: 'Dominik D. Kranz', 
    role: 'PhD Student', 
    image: '/images/team/dominik.jpg',
    desc: "I studied Biophysics at Humboldt-Universität zu Berlin, and love interdisciplinary research. My interests include pretty much everything that's cool, new and shiny, but my specialty is applying and adapting Neural Network architectures for biosignal processing, with a focus on ECG and EEG analysis. I especially enjoy bringing these models to the clinic, where they can help to improve patient care. "
  },
  { name: 'Ela Marie Akay', 
    role: 'Medical Doctor', 
    image: 'images/logo_group.webp',
    desc: ""
  },
  { name: 'Gadi Miron', 
    role: 'Medical Doctor', 
    image: '/images/team/gadi.jpg',
    desc: <div>I am a Neurologist and researcher with a special interest in epilepsy and digital health. My work focuses on understanding and addressing diagnostic challenges of people with epilepsy through computational analysis of EEG, imaging, and video data. Studies include AI-based video analysis of seizure semiology, retrospective clinical studies, EEG analysis for predicting seizures and long-term cognitive outcomes, and MRI analysis to better understand cognitive dysfunction in epilepsy. I also work to translate our research into clinical practice by developing a digital health tool, <a href="https://motusmed.de">https://motusmed.de</a>, currently being tested at Charité clinics.

    </div>
    
  },
  { name: 'Jonas Stelzer', 
    role: 'Medical Student', 
    image: 'images/team/JonasS.jpg',
    desc: "Currently a medical student at Charité University Hospital with a background in Economics from UCL, I am fascinated by the relationship between physiological cycles, such as heart rate variability, and brain states. By leveraging wearables, I am interested in bridging the gap between costly, hard-to-access brain activity data and consumer-grade health monitoring."
  },
  { name: 'Laura Krumm', 
    role: 'PhD Student', 
    image: 'images/team/LauraK.png',
    desc: ""
  },
  { name: 'Lida Antonakopoulou', 
    role: 'Medical Doctor', 
    image: 'images/team/LidaA.jpg',
    desc: ""
  },
  // { name: 'Lily Strittmatter', 
  //   role: 'Bachelor Student', 
  //   image: 'https://via.placeholder.com/150',
  //   desc: ""
  // },
  { name: 'Maximilian Schöls', 
    role: 'Medical Doctor', 
    image: 'images/logo_group.webp',
    desc: ""
  },
  { name: 'Mustafa Halimeh', 
    role: 'PhD Student', 
    image: '/images/team/Mustafa.jpg',
    desc: "Mustafa is a computer scientist working on data-driven pipelines to allow better long-term monitoring and treatment of neurological disorders. His current research involves applying state-of-the deep learning models and analytic tools on data recorded from wearables and videos to detect and predict seizures in epilepsy."
  },
  { name: 'Paul Müller', 
    role: 'PhD Student', 
    image: '/images/team/paul.jpg',
    desc: "I am interested in cortical dynamics and their relation to cognitive function, especially in the context of epilepsy. Beyond my goal to improve our general understanding of cortical dynamics I aim to identify meaningful biomarkers for epilepsy management. My methods include neuronal, statistical and machine learning models, non-linear time series analysis within the framework of brain criticality, and the evaluation of behavioural testing."
  },
  { name: 'Robert Terziev', 
    role: 'Medical Doctor', 
    image: '/images/team/robert.jpg',
    desc: ""
  },
  { name: 'Simon Vock', 
    role: 'PhD Student', 
    image: 'images/team/SimonV.jpg',
    desc: "I am fascinated by the parallels between artificial neural networks and biological brains. My research focuses on critical phase transitions in machine learning, exploring how networks of simple units can give rise to complex, intelligent behavior. By applying insights from deep learning and physics, I study neural systems with the aim of advancing our understanding of both artificial and biological intelligence. Through this work, I hope to contribute to the development of more efficient AI systems and innovative treatments for neurological disorders."
  },


  // Add other team members
];

function TeamCard({ member, isExpanded, onClick }) {
  return (
    <div className={`team-card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
      <img src={member.image} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{isExpanded ? member.desc : null}</p>
    </div>
  );
}

function Team() {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="team-section-container">
    <section id="team">
      <div className="team-container-container">
      <h2 className="section-title team-title">Team</h2>
        <div className="team-container">
        {membersData.map((member) => (
          <TeamCard
            key={member.name}
            member={member}
            isExpanded={expandedId === member.name}
            onClick={() => handleCardClick(member.name)}
          />
        ))}
      </div>
      </div>
    </section>
    </div>
  );
}

// function Team() {
//   const [teamMembers, setTeamMembers] = useState([]);

//   useEffect(() => {
//     // In a real app, you'd fetch this data from an API
//     const fetchTeamMembers = async () => {
//       // Simulating API call
//       const members = [
//         { name: 'Prof Christian Meisel', 
//           role: 'Principal Investigator', 
//           image: 'images/logo_group.webp',
//           desc: ''
//         },
//         // { name: 'Agustina Aragon Daud', 
//         //   role: 'Pre-Doctoral Intern', 
//         //   image: '/images/team/agustina.jpeg',
//         //   desc: "Agustina is a Pre-Doctoral Research Intern at the Bernstein Center for Computational Neuroscience Berlin. She graduated with honors from Psychology with a focus in Neuroscience from Universidad Favaloro, in Buenos Aires, Argentina. Her current research involves using machine learning for predictive time series analysis in epilepsy, utilizing both iEEG and ECG data."
//         // },
//         { name: 'Alexander Nelde', 
//           role: 'PhD Student', 
//           image: '/images/team/alex.jpg',
//           desc: ""
//         },
//         { name: 'Amrit Kashyap', 
//           role: 'Postdoc', 
//           image: '/images/team/amrit.jpg',
//           desc: ""
//         },
//         { name: 'Dominik D. Kranz', 
//           role: 'PhD Student', 
//           image: '/images/team/dominik.jpg',
//           desc: "I studied Biophysics at Humboldt-Universität zu Berlin, and love interdisciplinary research. My interests include pretty much everything that's cool, new and shiny, but my specialty is applying and adapting Neural Network architectures for biosignal processing, with a focus on ECG and EEG analysis. I especially enjoy bringing these models to the clinic, where they can help to improve patient care. "
//         },
//         { name: 'Ela Marie Akay', 
//           role: 'Medical Doctor', 
//           image: 'images/logo_group.webp',
//           desc: ""
//         },
//         { name: 'Gadi Miron', 
//           role: 'Medical Doctor', 
//           image: '/images/team/gadi.jpg',
//           desc: <div>I am a Neurologist and researcher with a special interest in epilepsy and digital health. My work focuses on understanding and addressing diagnostic challenges of people with epilepsy through computational analysis of EEG, imaging, and video data. Studies include AI-based video analysis of seizure semiology, retrospective clinical studies, EEG analysis for predicting seizures and long-term cognitive outcomes, and MRI analysis to better understand cognitive dysfunction in epilepsy. I also work to translate our research into clinical practice by developing a digital health tool, <a href="https://motusmed.de">https://motusmed.de</a>, currently being tested at Charité clinics.
 
//           </div>
          
//         },
//         { name: 'Jonas Stelzer', 
//           role: 'Medical Student', 
//           image: 'images/team/JonasS.jpg',
//           desc: "Currently a medical student at Charité University Hospital with a background in Economics from UCL, I am fascinated by the relationship between physiological cycles, such as heart rate variability, and brain states. By leveraging wearables, I am interested in bridging the gap between costly, hard-to-access brain activity data and consumer-grade health monitoring."
//         },
//         { name: 'Laura Krumm', 
//           role: 'PhD Student', 
//           image: 'images/team/LauraK.png',
//           desc: ""
//         },
//         { name: 'Lida Antonakopoulou', 
//           role: 'Medical Doctor', 
//           image: 'images/team/LidaA.jpg',
//           desc: ""
//         },
//         // { name: 'Lily Strittmatter', 
//         //   role: 'Bachelor Student', 
//         //   image: 'https://via.placeholder.com/150',
//         //   desc: ""
//         // },
//         { name: 'Maximilian Schöls', 
//           role: 'Medical Doctor', 
//           image: 'images/logo_group.webp',
//           desc: ""
//         },
//         { name: 'Mustafa Halimeh', 
//           role: 'PhD Student', 
//           image: '/images/team/Mustafa.jpg',
//           desc: "Mustafa is a computer scientist working on data-driven pipelines to allow better long-term monitoring and treatment of neurological disorders. His current research involves applying state-of-the deep learning models and analytic tools on data recorded from wearables and videos to detect and predict seizures in epilepsy."
//         },
//         { name: 'Paul Müller', 
//           role: 'PhD Student', 
//           image: '/images/team/paul.jpg',
//           desc: "I am interested in cortical dynamics and their relation to cognitive function, especially in the context of epilepsy. Beyond my goal to improve our general understanding of cortical dynamics I aim to identify meaningful biomarkers for epilepsy management. My methods include neuronal, statistical and machine learning models, non-linear time series analysis within the framework of brain criticality, and the evaluation of behavioural testing."
//         },
//         { name: 'Robert Terziev', 
//           role: 'Medical Doctor', 
//           image: '/images/team/robert.jpg',
//           desc: ""
//         },
//         { name: 'Simon Vock', 
//           role: 'PhD Student', 
//           image: 'images/team/SimonV.jpg',
//           desc: "I am fascinated by the parallels between artificial neural networks and biological brains. My research focuses on critical phase transitions in machine learning, exploring how networks of simple units can give rise to complex, intelligent behavior. By applying insights from deep learning and physics, I study neural systems with the aim of advancing our understanding of both artificial and biological intelligence. Through this work, I hope to contribute to the development of more efficient AI systems and innovative treatments for neurological disorders."
//         },


//         // Add other team members
//       ];
//       setTeamMembers(members);
//     };

//     fetchTeamMembers();
//   }, []);

//   return (
//     // <div className="team-section-container">
//     <section id="team">
//       <div className="team-container-container">
//       <h2 className="section-title team-title">Team</h2>
//         <div className="team-container">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="team-card">
//               <img src={member.image} alt={member.name} />
//               <h3>{member.name}</h3>
//               <p>{member.role}</p>
//               <p>{member.desc}</p>
//             </div>
//           ))}
//       </div>
//       </div>
//     </section>
//       // </div>
//   );
// }

export default Team;