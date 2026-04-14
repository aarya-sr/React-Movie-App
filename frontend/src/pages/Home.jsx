import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState } from "react"


function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const movies = [
        { id: 1, title: "Avengers", release_date: "2020" },
        { id: 2, title: "Peaky Blinders", release_date: "2022" },
        { id: 3, title: "The Matrix", release_date: "2019" }
    ]

    const handleSearch = (e) => {
        // e.preventDefault()
        alert(searchQuery)
        // setsearchQuery("-----")


    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie =>
                movie.title.toLowerCase().startsWith(searchQuery) && 
                <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home;