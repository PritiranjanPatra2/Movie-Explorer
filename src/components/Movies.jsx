// src/components/Movies.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

function Movies() {
    const [movies, setMovies] = React.useState([]);
    const [movie, setMovie] = React.useState('Harry');

    async function fetchedData() {
        const response = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=762dee42`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        fetchedData();
    }, []);

    return (
        <div className="movie-list">
            <input
                type="text"
                value={movie}
                onChange={(event) => {
                    setMovie(event.target.value);
                }}
                placeholder="Search for a movie..."
                className="search-input"
            />
            <button onClick={()=>{
                fetchedData();
                setMovie('');
            }}>Search</button>
            <div className="movies">
                {movies && movies.map((movie) => (
                    <Link key={movie.imdbID} to={`/moviedetails/${movie.imdbID}`} className="movie-link">
                        <div className="movie">
                            <img src={movie.Poster} alt={movie.Title} />
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Movies;
