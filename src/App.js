import "./App.css";
import MovieList from "./components/MovieList";
import { list } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";

import { useState } from "react";
import FilterMovie from "./components/FilterMovie";
function App() {
  const [movie, setmovie] = useState(list);
  const [filterValue, setfilterValue] = useState("");
  const [filterStars, setfilterStars] = useState(0);
  const handlerating = (rate) => setfilterStars(rate);
  const handlefilter = (e) => setfilterValue(e.target.value);

  const handleadd = (newmovie) => {
    setmovie([...movie, newmovie]);
  };

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <FilterMovie
        filterStars={filterStars}
        filterValue={filterValue}
        handlerating={handlerating}
        handlefilter={handlefilter}
      />
      <MovieList
       
        style={{ color: "blue" }}
        movies={movie.filter(
          (el) =>
            el.title.toLowerCase().includes(filterValue.toLowerCase()) &&
            el.rating >= filterStars
        )}
      />
      <Add handleadd={handleadd} />
    </div>
  );
}

export default App;
