import '../css/Favorites.css'
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
  const { favorites } = useMovieContext()

  if (favorites) {
    return <div className="favorites">
           <h2>Your Favorites</h2>
      <div className= "movies-grid">{favorites.map((movieCard) => {
          return <MovieCard key={movieCard.id} movie={movieCard} />
        })}</div>
      </div>
  }
  return <div className="favorites-empty">
            <h2>No favorite movies yet</h2>
            <p>Start adding movies to your favorites and they will display here</p>
         </div>
}

export default Favorites