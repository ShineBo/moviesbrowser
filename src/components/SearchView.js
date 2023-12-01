import Hero from "./Hero";
import { Link } from "react-router-dom"

// Movie db api key = e658f60cafc89aaf0cda12cb8786293a
// Movie img url = https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const MovieCard = ( { movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    
    return (
        <div className="col-lg-4 col-md-6 col-12 my-4">
            <div className="card">
                <img className="card-img-top" src={posterUrl} alt={movie.original_title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
)}

    const SearchView = ( { keyword, searchResults }) => {
    const title = keyword ? `You are searching for ${keyword}` : "Try Search Something in the search box"
    console.log(searchResults, "are the search results")

    const originalTitles = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
    }
    );

    return (
        <>
            <Hero text={title} />
            {originalTitles && 
            <div className="container">
                <div className="row">
                    {originalTitles}
                </div>
            </div>
            }
        </>
        )
}

export default SearchView;