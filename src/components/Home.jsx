import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Movie Explorer</h1>
        <p>Discover and explore a wide range of movies. Search for your favorite movies and get detailed information about them.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YKw6n-RDgqyFy69GSuuiue2qkkByXQLJLg&s" alt="Movie Poster" className="welcome-poster" />
      </div>
      <div className="feature-section">
        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PgrB4MCEeDumBGtDLd2ytBUway4aam7h3g&s" alt="Search Movies" className="feature-image" />
          <h2>Search Movies</h2>
          <p>Find movies by title, genre, or year. Get a list of movies matching your search criteria.</p>
        </div>
        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkf1NDkAZhinI0L6pvoug2tCcihjRNDCanw&s" alt="Movie Details" className="feature-image" />
          <h2>Movie Details</h2>
          <p>Get detailed information about each movie including plot, genre, director, and actors.</p>
        </div>
        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5W4CRaXrxo5wvpmU2uigiyqr0pcHO_uWog&s" alt="Watch Trailers" className="feature-image" />
          <h2>Watch Trailers</h2>
          <p>Watch trailers of your favorite movies and get a sneak peek before watching the full movie.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
