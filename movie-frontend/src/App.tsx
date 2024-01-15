import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { Trailer } from "./components/Trailer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Trailer />
      <Home />
    </Router>
  );
}

export default App;
