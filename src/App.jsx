// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Movies List</h1>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
