
import { Carousel } from 'react-bootstrap';
import CarruselCard from './CarruselCard'
import React, { useState, useEffect } from 'react';
const Carrusel = () => {
  

  const [movies, setmovies] = useState([])

  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1')
        .then(res => res.json())
        .then(data =>//console.log(data.results))
            setmovies(data.results))
}, [])


  const handleClick = id => {
        console.log(` me hicienron click en la tarjeta con el id `, id);
       
    }
  // https://api.themoviedb.org/3/movie/now_playing?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1

    return (
        <div>
          <CarruselCard/>
           {/* {movies && movies.map((movie) => {
                    return <CarruselCard
                        title={movie.title}
                        backdrop_path={movie.poster_path}
                        key={movie.id}
                        id={movie.id}
                        handleClick={handleClick} />

                })} */}
        </div>
    )
}

export default Carrusel
