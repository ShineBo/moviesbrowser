import { Link } from "react-router-dom"
import noImg from "./assests/noImg.jpeg"

const MovieCard = ( { movie }) => {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : null;
    const detailUrl = `/movies/${movie.id}`
    
        return (
            <>
            <div className="col-lg-4 col-md-6 col-12 my-4">
                <div className="card">
                {posterUrl ? 
                (
                    <img className="card-img-top" src={posterUrl} alt={movie.original_title} />
                ) 
                : 
                (   
                    <div className="no-poster-placeholder text-center">
                        <img src={noImg} alt="No Photo yet" className=""/>
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

export default MovieCard;