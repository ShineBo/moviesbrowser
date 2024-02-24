import React, { useRef } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom"
import HomePageMovieRecommend from "./HomePageMovieRecommend";
import homeBackDrop from "./assests/video.png"

const Home = () => {
  
return (
<div>
    <Hero text="Welcome to React Movie Browser" backdrop={homeBackDrop} />
    <div className="container mt-5">
      <header className="jumbotron text-center">
        <h1 className="display-4">Welcome to Movies Browser</h1>
        <p className="lead">Explore a world of movies and discover your next favorite film.</p>
        <Link to="/search" className="btn btn-primary btn-lg">
          Explore Now
        </Link>
      </header>
      <HomePageMovieRecommend />
    </div>
</div>
)
}

export default Home;
