import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {

    const { id } = useParams()
    // console.log(id)

    const [ MovieDetails, setMovieDetails] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        // console.log("Make an api requiest", {id})
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setIsLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const renderMovieDetails = () => {
        if(isLoading){
            return <Hero text=".....Loading" />
        }
        if(MovieDetails){
            const posterUrl = `https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original/${MovieDetails.backdrop_path}`
            return (
            <>
            <Hero text={MovieDetails.original_title || "Fallback Title"} backdrop={backdropUrl}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <img src={posterUrl} alt={MovieDetails.original_title} className="img-fluid rounded shadow"/>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <h3>{MovieDetails.original_title}</h3>
                        <p className="lead">{MovieDetails.overview}</p>
                    </div>
                </div>
            </div>
            </>
            )      
        }
    }

    return renderMovieDetails()
    }

export default MovieView;