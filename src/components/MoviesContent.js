import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTopRated } from '../actions';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import "../style/maincontent.css";

function MoviesContent() {

  const history = useHistory();
  const movies = useSelector(state => state.topRated.movies)
  const top10Movies = movies.sort((a,b) => b.popularity - a.popularity).slice(0,10)
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopRated())
        console.log(movies)
    },[])
   
  return (
    <div>
    <Navbar />
    <SearchBar />
    <div className="main">
     <div className="list"> 
      {top10Movies.map(movie => 
        <div className="list-item" key={movie.id}>
         <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} />
         <p>{movie.title}</p>
         <button onClick={() => history.push(`/moviedetails/${movie.id}`)}>See more</button>
        </div>
      )}
     </div>
    </div>
    </div>
  );
}

export default MoviesContent;