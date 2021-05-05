import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Carrusel.css'
const CarruselCard = ({ title, backdrop_path ,handleClick, id }) => {




    backdrop_path = `https://image.tmdb.org/t/p/original/${backdrop_path}`

    return (
        <div>
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src='https://clarovideocdn5.clarovideo.net/PELICULAS/LIARLIAR/EXPORTACION_WEB/SS/LIARLIARWHORIZONTAL.jpg?size=675x380'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>1</p>
          </Carousel.Caption>
          
        </Carousel.Item>
       

          
    

        


      

      
        
 </Carousel>

        </div>
    )
}

export default CarruselCard
