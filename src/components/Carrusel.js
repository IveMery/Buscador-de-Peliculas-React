
import { Carousel } from 'react-bootstrap';
import './Carrusel.css'
import React, { useState, useEffect } from 'react';
import CarruselCard from './CarruselCard'
const Carrusel = () => {
  

  const [movies, setmovies] = useState([])

  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6c78ff8e971663d6ee470502622fe044&language=es-ES&page=1')
        .then(res => res.json())
        .then(data =>//console.log(data.results))
            setmovies(data.results))
}, [])


  const handleClick = id => {
        console.log(` me hicienron click en la tarjeta con el id `, id);
       
    }
return (
        <div>
         {/* {movies && movies.map((movie) => {
                    return <CarruselCard
                        title={movie.title}
                        backdrop_path={movie.backdrop_path}
                        key={movie.id}
                        id={movie.id}
                        handleClick={handleClick} />

                })} */}

  <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src='https://clarovideocdn5.clarovideo.net/PELICULAS/LIARLIAR/EXPORTACION_WEB/SS/LIARLIARWHORIZONTAL.jpg?size=675x380'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>asdf</h3>
            <p>1</p>
          </Carousel.Caption>
          
        </Carousel.Item>
       

        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src='https://cdn.stayhappening.com/events1/banners/5c449a3e7b8662747c5ba51519910892b6fb7f80cb0cd688d8a976862b2a17a0-rimg-w526-h276-gmir.jpg?v=1617547436'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>asdfg</h3>
            <p>2</p>
          </Carousel.Caption>
          
        </Carousel.Item>
        
 </Carousel>

               
        </div>
    )
}

export default Carrusel
