import React from 'react'
import { Card } from 'react-bootstrap'
import MovieCard from './MovieCard'


const MovieList = ({movies}) => {
  
  return (
    <div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap'}}>
        {movies.map(
            (el,i)=> <MovieCard key={i} el={el}/>
        )}
        
    </div>
  )
}

export default MovieList