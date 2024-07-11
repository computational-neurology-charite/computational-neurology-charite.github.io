import React, { useState, useEffect } from 'react';
import './Team.css';

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const fetchTeamMembers = async () => {
      // Simulating API call
      const members = [
        { name: 'John Doe', 
          role: 'Principal Investigator', 
          image: 'https://via.placeholder.com/150',
          desc: 'John Doe is a Principal Investigator at the Computational Neurology Research Group. He is an expert in machine learning and data science.'
        },
        { name: 'John Doe', role: 'Principal Investigator', image: 'https://via.placeholder.com/150' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },
        { name: 'John Doe', role: 'Principal Investigator', image: '/team/john.jpg' },

        // Add other team members
      ];
      setTeamMembers(members);
    };

    fetchTeamMembers();
  }, []);

  return (
    <section id="team">
      <h2 className="section-title">Team</h2>
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
    </section>
  );
}

export default Team;