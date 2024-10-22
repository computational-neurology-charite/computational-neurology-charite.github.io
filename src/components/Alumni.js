import React, { useState, useEffect } from 'react';
import './Team.css';

function Alumni() {
  const [alumniMembers, setAlumniMembers] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const fetchAlumniMembers = async () => {
      // Simulating API call
      const members = [

        { name: 'Agustina Aragon Daud', 
          role: 'Pre-Doctoral Intern', 
          image: '/images/team/agustina.jpeg',
          desc: ""
          // desc: "Agustina is a Pre-Doctoral Research Intern at the Bernstein Center for Computational Neuroscience Berlin. She graduated with honors from Psychology with a focus in Neuroscience from Universidad Favaloro, in Buenos Aires, Argentina. Her current research involves using machine learning for predictive time series analysis in epilepsy, utilizing both iEEG and ECG data."
        },
        { name: 'Lily Strittmatter', 
          role: 'Bachelor Student', 
          image: 'images/logo_group.webp',
          desc: ""
        },
        { name: 'Mario Andina', 
            role: 'Doctor Student', 
            image: 'images/logo_group.webp',
            desc: ""
         },
         { name: 'Georg von Arnim', 
            role: 'Master Student', 
            image: 'images/logo_group.webp',
            desc: ""
         },


        // Add other alumni members
      ];
      setAlumniMembers(members);
    };

    fetchAlumniMembers();
  }, []);

  return (
    // <div className="alumni-section-container">
    <section id="team">
      <div className="team-container-container">
      <h2 className="section-title team-title">Alumni</h2>
        <div className="team-container">
          {alumniMembers.map((member, index) => (
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

export default Alumni;