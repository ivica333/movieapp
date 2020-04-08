import React from 'react';
import "../style/searchbar.css";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { searchMovie,searchShow } from '../actions';

function SearchBar() {

  const [searchText,setSearchText] = useState("");
  const movies = useSelector(state => state.topRated.movies);
  const searchedMovies = useSelector(state => state.searchedMovie.searchedMovie);
  const searchedShows = useSelector(state => state.searchedShow.searchedShows);
  const top10Movies = movies.sort((a,b) => b.popularity - a.popularity).slice(0,10);
  const shows = useSelector(state => state.topShows.shows)
  const top10Shows = shows.sort((a,b) => b.popularity - a.popularity).slice(0,10)
  const dispatch = useDispatch();

  const search = () => {

        if(searchText.length > 2){
         let movieResult = top10Movies.filter(movie => {
           return searchedMovies.filter(m => m.title === movie.title)
         })
         let showResult = top10Shows.filter(movie => {
          return searchedShows.filter(m => m.name === movie.name)
        })
         let movieres = movieResult.filter(movie => movie.title.toLowerCase().match(searchText.toLowerCase()))
         let showres = showResult.filter(movie => movie.name.toLowerCase().match(searchText.toLowerCase()))
         
         setTimeout(() => {
          dispatch(searchMovie(searchText,movieres));
          dispatch(searchShow(searchText,showres));
         },1000)

        }
  }

  return (
    <div className="search-bar">
      <div className="search-input">
        <input type="text" onChange={(e) => setSearchText(e.target.value)}  onKeyUp={() => search()} value={searchText} placeholder="Search..." />
      </div>
    </div>
  );
}

export default SearchBar;