import "./App.css";

import { list } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FilterMovie from './components/FilterMovie'
import MovieList from './components/MovieList'
import Add from './components/Add'
import Description from './components/Description'
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
 <Routes>
   <Route path='/' element={<div>
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
   </div> }
   />

<Route exact path='/Description/:id' element={<Description movie={movie}/>}/>
 </Routes>
    </div>
 

  );
}

export default App;
