import React from 'react';
import { useEffect } from 'react';
import { getMovieDetail, getMovieTrailer } from '../actions';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "../style/details.css";

function MovieDetails() {

  const history = useHistory();
  const id = useParams()
  const detail = useSelector(state => state.movieDetails.movieDetails)
  const trailer = useSelector(state => state.movieTrailer.movieTrailer)
  const dispatch = useDispatch()

  const goBack = () => history.goBack();

  useEffect(() => {
    dispatch(getMovieDetail(id.id))
    dispatch(getMovieTrailer(id.id))
    
},[])

  return (
    <div className="details">
     <div className="content">
      <div className="nav-btn">
        <button onClick={() => goBack()}>Go back</button>
      </div>
       <div className="trailer">
        {trailer.filter((m,i) => i < 1).map(trailer => {
          return (
            <iframe
              width="450"
              height="305"
              title={trailer.name}
              src={`https://www.youtube.com/embed/${trailer.key}`}
              key={trailer.key}
              frameBorder="0"
              allowFullScreen
            />
          );
        })}
      </div>
      <div>
        <div className="movie-detail">
          <h1>{ detail.title }</h1>
          <p>{detail.overview}</p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default MovieDetails;