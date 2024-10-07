import React, { useState, useEffect } from 'react';
import './Team.css';

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const fetchTeamMembers = async () => {
      // Simulating API call
      const members = [
        { name: 'Prof Christian Meisel', 
          role: 'Principal Investigator', 
          image: 'https://via.placeholder.com/150',
          desc: 'Some description about Christian Meisel'
        },
        { name: 'Agustina Aragon Daud', 
          role: 'Pre-Doctoral Intern', 
          image: '/images/team/agustina.jpeg',
          desc: "Agustina is a Pre-Doctoral Research Intern at the Bernstein Center for Computational Neuroscience Berlin. She graduated with honors from Psychology with a focus in Neuroscience from Universidad Favaloro, in Buenos Aires, Argentina. Her current research involves using machine learning for predictive time series analysis in epilepsy, utilizing both iEEG and ECG data."
        },
        { name: 'Alexander Nelde', 
          role: 'PhD Student', 
          image: '/images/team/alex.jpg',
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        { name: 'Amrit Kashyap', 
          role: 'Postdoc', 
          image: '/images/team/amrit.jpg',
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        { name: 'Dominik D. Kranz', 
          role: 'PhD Student', 
          image: '/images/team/dominik.jpg',
          desc: "I studied Biophysics at Humboldt-Universität zu Berlin, and love interdisciplinary research. My interests include pretty much everything that's cool, new and shiny, but my specialty is applying and adapting Neural Network architectures for biosignal processing, with a focus on ECG and EEG analysis. I especially enjoy bringing these models to the clinic, where they can help to improve patient care. "
        },
        { name: 'Gadi Miron', 
          role: 'Medical Doctor', 
          image: '/images/team/gadi.jpg',
          desc: ""
          
        },
        { name: 'Laura Krumm', 
          role: 'PhD Student', 
          image: 'https://via.placeholder.com/150',
          desc: ""
        },
        { name: 'Lida Antonakopoulou', 
          role: 'Medical Doctor', 
          image: 'https://via.placeholder.com/150',
          desc: ""
        },
        { name: 'Lily Strittmatter', 
          role: 'Bachelor Student', 
          image: 'https://via.placeholder.com/150',
          desc: ""
        },
        { name: 'Maximilian Schöls', 
          role: 'Medical Doctor', 
          image: 'https://via.placeholder.com/150',
          desc: ""
        },
        { name: 'Mustafa Halimeh', 
          role: 'PhD Student', 
          image: '/images/team/Mustafa.jpg',
          desc: ""
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
          role: 'Medical Doctor', 
          image: 'https://via.placeholder.com/150',
          desc: ""
        },


        // Add other team members
      ];
      setTeamMembers(members);
    };

    fetchTeamMembers();
  }, []);

  return (
    // <div className="team-section-container">
    <section id="team">
      <div className="team-container-container">
      <h2 className="section-title team-title">Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.desc}</p>
            </div>
          ))}
      </div>
      </div>
    </section>
      // </div>
  );
}

export default Team;