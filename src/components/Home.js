import { useState, useEffect } from "react";
import React, { useRef } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom"

const MovieRecommend = () => {
  const [ recommendMovies, setrecommendMovies] = useState([])

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/11/recommendations?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
      // fetch(`https://api.themoviedb.org/3/movie/21?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
          .then(response => response.json())
          .then(data => {
              setrecommendMovies(data.results);
              console.log(recommendMovies)
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  const renderMovieCards = () => {
    return recommendMovies.map(movie => (
      <div key={movie.id} className="col-md-4 mb-4">
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.release_date}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="container mt-5">
      <h2>Movie Recommendations</h2>
      <div className="row">
        {renderMovieCards()}
      </div>
    </div>
  );
}

const Home = () => {
  
return (
<div>
    <Hero text="Welcome to React 201" />
    <div className="container mt-5">
      <header className="jumbotron text-center">
        <h1 className="display-4">Welcome to Movies Browser</h1>
        <p className="lead">Explore a world of movies and discover your next favorite film.</p>
        <Link to="/search" className="btn btn-primary btn-lg">
          Explore Now
        </Link>
      </header>

      <MovieRecommend />

      <section className="row">
        <div className="col-md-12">
          <h2>Popular Genres</h2>
          {/* Display a list of popular genres with links to explore */}
        </div>
      </section>
    </div>
</div>
)
}

export default Home;
