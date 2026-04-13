import './App.css'
import MovieCard from "./components/MovieCard"



function App() {

  return (
    <>
    <MovieCard movie={{title:"Avengers", release_date:"2024"}}/>
    <MovieCard movie={{title:"Peaky Blinders", release_date:"2020"}}/>
    <MovieCard movie={{title:"Doraemon", release_date:"2022"}}/>
    
    </>
  )
}



export default App
