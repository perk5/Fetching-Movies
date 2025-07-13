import '../css/MovieCard.css'
import { useMovieContext } from "../contexts/MovieContext"

export default function MovieCard(prop){

  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(prop.movie.id)
  console.log(prop.movie.title)
  function onFavClick(e){
    e.preventDefault()
    if (favorite) removeFromFavorites(prop.movie.id)
    else addToFavorites(prop.movie)
  }

  return <div className="movie-card">
        <div className="movie-poster">

          <img src={ prop.movie.poster_path ? `https://image.tmdb.org/t/p/w500${prop.movie.poster_path}` : "src/assets/spider.png" } alt={prop.movie.title}/>

          <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>❤</button>
          </div>
        </div>
        <div className="movie-info">
            <h3>{prop.movie.title}</h3>
            <p>{prop.movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
}