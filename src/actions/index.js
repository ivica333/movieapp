import {
   GET_TOP_RATED_MOVIES,
   GET_TOP_RATED_SHOWS,
   GET_MOVIE_DETAIL,
   GET_SHOW_DETAIL,
   SEARCH_MOVIE,
   SEARCH_SHOW,
   GET_MOVIE_TRAILER,
   GET_SHOW_TRAILER
   } from './types';
import api from "../services/api";

export const getTopRated = () => dispatch => {
  api.getMovies().then(response => {
  dispatch({
      type:GET_TOP_RATED_MOVIES,
      payload:response.data.results
    })
  })
}

export const getTopRatedShows = () => dispatch => {
  api.getShows().then(response => {
  dispatch({
      type:GET_TOP_RATED_SHOWS,
      payload:response.data.results
    })
  })
}

export const getMovieDetail = (id) => dispatch => {
  api.getMovieDetail(id).then(response => {
    
  dispatch({
      type:GET_MOVIE_DETAIL,
      payload:response.data
    })
  })
}

export const getShowDetail = (id) => dispatch => {
  api.getShowDetail(id).then(response => {
    
  dispatch({
      type:GET_SHOW_DETAIL,
      payload:response.data
    })
  })
}

export const searchMovie = (title,res) => dispatch => {
  api.searchMovie(title,res).then(response => {
    
  dispatch({
      type:SEARCH_MOVIE,
      payload:response.data.results
    })
    dispatch({
      type:GET_TOP_RATED_MOVIES,
      payload:res
    })
  })
}
export const searchShow = (title,res) => dispatch => {
  api.searchMovie(title,res).then(response => {
    
    dispatch({
      type:SEARCH_SHOW,
      payload:response.data.results
    })
    dispatch({
      type:GET_TOP_RATED_SHOWS,
      payload:res
    })
  })
}

export const getMovieTrailer = (id) => dispatch => {
  api.getTrailer(id).then(response => {
    dispatch({
      type:GET_MOVIE_TRAILER,
      payload:response.data.results
    })
  })
}
export const getShowTrailer = (id) => dispatch => {
  api.getShowTrailer(id).then(response => {
    dispatch({
      type:GET_SHOW_TRAILER,
      payload:response.data.results
    })
  })
}