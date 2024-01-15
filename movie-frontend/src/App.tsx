import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { Trailer } from "./components/Trailer";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Trailer />
    </Router>
  );
}

export default App;
