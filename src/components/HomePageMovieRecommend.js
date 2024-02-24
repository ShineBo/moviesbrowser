import { useState, useEffect } from "react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const HomePageMovieRecommend = () => {
  const [ recommendMovies, setrecommendMovies] = useState([])

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/8888/recommendations?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
      // fetch(`https://api.themoviedb.org/3/movie/21?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
          .then(response => response.json())
          .then(data => {
              setrecommendMovies(data.results);
              // console.log(recommendMovies)
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  const renderMovieCards = () => {
    return recommendMovies.map(movie => {
      const detailUrl = `/movies/${movie.id}`;
      return ( <div key={movie.id} className="col-md-4 mb-4">
          <Link to={detailUrl}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.original_title} />
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        </div> )
    });
  }
  
  return (
    <div className="container mt-5 text-center">
      <h1 className=" mb-3">Weekly Movie Recommendations</h1>
      <h3>This Week Top Picks</h3>
      <div className="row">
        {renderMovieCards()}
      </div>
    </div>
  );
}

export default HomePageMovieRecommend;
