import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
    </Router>
  );
}

export default App;
