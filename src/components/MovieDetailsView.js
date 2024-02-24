import Hero from "./Hero.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SuggestionCard from "./SuggestionCard.js";
import noImg from "./assests/noImg.jpeg";

const MovieDetailsView = () => {

    const { id } = useParams()
    // console.log(id)

    const [ MovieDetails, setMovieDetails] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ suggestions, setSuggestions ] = useState([])

    useEffect(() => {
        // console.log("Make an api requiest", {id})
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setIsLoading(false)
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);

    }, [id]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=e658f60cafc89aaf0cda12cb8786293a&language=en-US`)
            .then(response => response.json())
            .then(dataSuggestion => {
                setSuggestions(dataSuggestion.results);
                // console.log(dataSuggestion.results);
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
            const posterUrl = MovieDetails.poster_path 
                ? `https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`
                : noImg;
            const backdropUrl = `https://image.tmdb.org/t/p/original/${MovieDetails.backdrop_path}`

            return (
            <>
            <Hero text={MovieDetails.original_title || "Fallback Title"} backdrop={backdropUrl}/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        {posterUrl ? 
                        (
                            <img src={posterUrl} alt={MovieDetails.original_title} className="img-fluid rounded shadow"/>
                        )
                        :
                        (
                            <img src={noImg} alt={MovieDetails.original_title} className="img-fluid rounded shadow"/>
                        )
                        }
                    </div>
                    <div className="col-lg-8 col-md-7 mt-5">
                        <h1>{MovieDetails.original_title}</h1>
                        <p className="lead mt-3">{MovieDetails.overview}</p>
                        <h4>
                            Release Date - {MovieDetails.release_date}
                        </h4>
                        <h4>
                            Language - {MovieDetails.spoken_languages[0].name}
                        </h4>
                        <h4>
                            Genres - {MovieDetails.genres.map((genre, i) => genre.name).join(', ')}
                        </h4>
                    </div>
                </div>
                <div className="container mt-4">
                    <h1>More Like This</h1>
                    <div className="row">
                        {suggestions.map((movie, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3">
                                    <SuggestionCard movie={movie} key={i}/>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
            </>
            )      
        }
    }

    return renderMovieDetails()
    }

export default MovieDetailsView;