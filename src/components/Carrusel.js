import React, { useState, useEffect } from 'react';

import './Carrusel.css'
import { Carousel } from 'react-bootstrap';
const Carrusel = () => {
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=6c78ff8e971663d6ee470502622fe044&languaje=es-ES&page=1')
    .then(res =>res.json()
    .then(data =>console.log(data.results)))
})

  
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 slider"
      src="https://www.neo2.com/wp-content/uploads/2020/05/Las-mejores-peliculas-de-2020-10.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider"
      src="https://www.elcomercio.com/files/article_main/uploads/2019/08/07/5d4b12a200af8.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider"
      src="https://clarovideocdn5.clarovideo.net/PELICULAS/LIARLIAR/EXPORTACION_WEB/SS/LIARLIARWHORIZONTAL.jpg?size=675x380"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Carrusel
