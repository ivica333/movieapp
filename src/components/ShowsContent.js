import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedShows } from '../actions';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "../style/maincontent.css";
import Navbar from './Navbar';
import SearchBar from './SearchBar';

function ShowsContent() {

  const history = useHistory();
  const shows = useSelector(state => state.topShows.shows)
  const top10Shows = shows.sort((a,b) => b.popularity - a.popularity).slice(0,10)

  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTopRatedShows())
    },[])

  return (
    <div>
    <Navbar />
    <SearchBar />
    <div className="main">
     <div className="list">
      {top10Shows.map(show =>(
        <div className="list-item" key={show.id}>
          <img src={`http://image.tmdb.org/t/p/w500${show.poster_path}`} />
          <p>{show.name}</p>
          <button onClick={() => history.push(`/showdetails/${show.id}`)}>See more</button>
        </div>)
      )}
     </div>
    </div>
    </div>
  );
}


export default ShowsContent;