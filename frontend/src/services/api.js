const API_KEY = "f908335dc0693b4975df5d92116dce6f"
// const BASE_URL = "https://api.themoviedb.org/"
const BASE_URL = "https://api.themoviedb.org/3"
// https://www.themoviedb.org/


export const getpopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTBhNGNmOTg4YjcxYjE3YzFhNzI5YjBhOTU0ZDlmMCIsIm5iZiI6MTc3NjE0NjIyNi41NCwic3ViIjoiNjlkZGQ3MzI0NjEzNDFhNWE4MzczYzQ1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.NhTa_ZQTv_GDNfKqCoF4gh-E1YNRfX4pWHGFAqrvTDo'
//   }
// };

// const data = fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));


// console.log(data)

