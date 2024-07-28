
import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Movie Explorer</h1>
        <p>Movie Explorer is a platform designed to help you discover and explore a wide range of movies. Whether you are a casual viewer or a film enthusiast, Movie Explorer offers detailed information about movies including plot, genre, director, and cast. Our goal is to provide you with the best movie discovery experience.</p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <p>We are a passionate team of movie enthusiasts and developers dedicated to bringing you the best platform for exploring movies. Our team works tirelessly to update our database and improve the user experience.</p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, feedback, or suggestions, feel free to reach out to us at <a href="mailto:support@movieexplorer.com">support@movieexplorer.com</a>.</p>
      </div>
    </div>
  );
}

export default About;
