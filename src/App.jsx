import MovieCard from "./components/MovieCard"
import "./css/index.css"
import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx"
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext.jsx'
import Navbar from "./components/Navbar"

function App() {
  return (
  <MovieProvider>
    <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
  </MovieProvider>
  )
}


export default App
