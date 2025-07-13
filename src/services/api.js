const API_KEY = "4be3df2de0dbc0dd8e1c9acf7df626f3"
const BASE_URL = "https://api.themoviedb.org/3"

export function getPopularMovies(){
  const promise = fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`).then((response) => {
    return response.json()
  }).then((data) => {
    return data.results
  })
  return promise
}


export const searchMovies = (query) => {
  const promise = fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`).then((response) => {
    return response.json()
  }).then((data) => {
    return data.results
  })
  return promise
}