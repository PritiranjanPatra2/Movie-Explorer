import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Moviedetails.css';

function MovieDetails() {
    const { imdb } = useParams();
    const [movie, setMovie] = useState(null);

    async function fetchMovieDetails() {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdb}&apikey=762dee42`);
        const data = await response.json();
        setMovie(data);
        console.log(data);
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [imdb]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <Link to='/movies'><button className="return-button">Return</button></Link>
            <h1>{movie.Title}</h1>
            <p><strong>Year:</strong> {movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-plot">{movie.Plot}</div>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Awards:</strong> {movie.Awards}</p>
            <p><strong>BoxOffice:</strong> {movie.BoxOffice}</p>
            <p><strong>Country:</strong> {movie.Country}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Metascore:</strong> {movie.Metascore}</p>
            <p><strong>Rated:</strong> {movie.Rated}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <div className="ratings">
                <h3>Ratings:</h3>
                {movie.Ratings.map((rating, index) => (
                    <p key={index}><strong>{rating.Source}:</strong> {rating.Value}</p>
                ))}
            </div>
        </div>
    );
}

export default MovieDetails;
