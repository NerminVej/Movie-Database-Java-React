import Header from "./components/Header";
import Hero from "./components/Hero";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Trailer } from "./components/Trailer";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

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
