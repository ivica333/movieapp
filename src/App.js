import React from 'react';
import './App.css';
import MoviesContent from './components/MoviesContent';
import ShowsContent from './components/ShowsContent';
import MovieDetails from './components/MovieDetails';
import ShowDetails from './components/ShowDetails';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  <Provider store={store}>  
    <Router> 
     <div className="App">
     <Switch>
     <Route path="/" exact component={ShowsContent} />  
     <Route path="/movies" component={MoviesContent} />
     <Route path="/shows" component={ShowsContent} />
     <Route path="/moviedetails/:id" component={MovieDetails} />
     <Route path="/showdetails/:id" component={ShowDetails} />
     </Switch>
     </div>
    </Router> 
  </Provider>    
  );
}

export default App;
