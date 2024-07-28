
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import MovieDetails from "./components/MovieDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="moviedetails/:imdb" element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
