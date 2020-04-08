import React from 'react';
import { useEffect } from 'react';
import { getShowDetail, getShowTrailer } from '../actions';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "../style/details.css";

function ShowDetails() {

  const history = useHistory();
  const id = useParams()
  const detail = useSelector(state => state.showDetails.showDetails)
  const trailer = useSelector(state => state.showTrailer.showTrailer)
  const dispatch = useDispatch()

  const goBack = () => history.goBack();
  
  useEffect(() => {
    dispatch(getShowDetail(id.id))
    dispatch(getShowTrailer(id.id))  
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
          <h1>{ detail.name }</h1>
          <p>{detail.overview}</p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default ShowDetails;