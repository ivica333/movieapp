import axios from "axios";

const key = "298c83d0a09dfb58d90713bfd729a2ae";

export default {
    getMovies() {
        return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`)
      },
    getShows() {
        return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`)
      },
    getMovieDetail(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
      },
    getShowDetail(id) {
      return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}`)
      },
    searchMovie(title){
        return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${title}`)
      },
    getTrailer(id){
        return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`)
      },
    getShowTrailer(id){
        return axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}`)
      }
}