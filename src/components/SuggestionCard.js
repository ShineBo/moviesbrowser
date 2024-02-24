import React from 'react';
import noImg from "./assests/noImg.jpeg";
import { Link } from "react-router-dom";

const SuggestionCard = ( { movie }) => {
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noImg;

    const detailUrl = `/movies/${movie.id}`
    
    return (
        <Link to={detailUrl} className=' text-decoration-none text-dark'>
            <section className='d-flex flex-column justify-content-center align-items-center'>
                <img src={posterUrl} alt={movie.original_title} width={200}></img>
                <h4 className=' text-center'>{movie.original_title}</h4>
            </section>
        </Link>
    )
}

export default SuggestionCard
