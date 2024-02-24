import Hero from "./Hero";
import MovieCard from "./MovieCard";
// Movie db api key = e658f60cafc89aaf0cda12cb8786293a
// Movie img url = https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

    const SearchView = ( { keyword, searchResults }) => {
    const title = keyword ? `You are searching for ${keyword}` : "Explore movies that you want in search box"

    const movieAllData = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
    }
    );

    return (
        <>
            {title && <Hero text={title} />}
            {movieAllData && 
            <div className="container">
                <div className="row">
                    {movieAllData}
                </div>
            </div>
            }
        </>
        )
}

export default SearchView;