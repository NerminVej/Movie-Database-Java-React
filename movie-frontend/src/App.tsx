import Header from "./components/Header";
import Hero from "./components/Hero";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Trailer } from "./components/Trailer";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  return (
    <Router>
      <Route path="/" element={<Header />}></Route>
      <Header />
      <Hero />
      <Trailer />
      <Home />
    </Router>
  );
}

export default App;
