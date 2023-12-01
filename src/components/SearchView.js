import Hero from "./Hero";
import { Link } from "react-router-dom"

// Movie db api key = e658f60cafc89aaf0cda12cb8786293a
// Movie img url = https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const MovieCard = ( { movie }) => {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : null;
    const detailUrl = `/movies/${movie.id}`
    
        return (
            <>
            <div className="col-lg-4 col-md-6 col-12 my-4">
                <div className="card">
                {posterUrl ? (
                <img className="card-img-top" src={posterUrl} alt={movie.original_title} />
                ) : 
                (   
                    <div className="no-poster-placeholder text-center">
                        <img src="logo192.png" alt="No Photo yet"/>
                        <h3>No Photo yet</h3>
                    </div>
                )}
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <p className="lead">{movie.release_date}</p>
                        <Link to={detailUrl} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
            </>
        )
}

    const SearchView = ( { keyword, searchResults }) => {
    const title = keyword ? `You are searching for ${keyword}` : "Explore movies that you want in search box"

    const originalTitles = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
    }
    );

    return (
        <>
            {title && <Hero text={title} />}
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