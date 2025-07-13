import MovieCard from '../components/MovieCard.jsx'
import React from "react"
import '../css/Home.css'
import { getPopularMovies, searchMovies } from '../services/api.js'


export default function Home(){

  const [searchQuery, setSearchQuery] = React.useState("")
  const [movies, setMovies] = React.useState([])
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }catch (err){
        console.log(err)
        setError("Failed to load Movies..")
      }
      finally{
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch =  async (e) => {
    e.preventDefault()
    if(!searchQuery.trim()) return
    if(loading) return
    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      localStorage.setItem("movie", JSON.stringify(searchResults))
      setError(null)
    } catch (err){
      setError("Failed to search movies...")
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Submit</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? ( <div className="loading">Loading...</div>) : (<div className= "movies-grid">{movies.map((movieCard) => {
        return <MovieCard key={movieCard.id} movie={movieCard} />
      })}</div>)}

    </div>
   )
}