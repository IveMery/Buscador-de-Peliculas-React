
import { Carousel } from 'react-bootstrap';
import React from 'react'

const CarruselCard = ({title, backdrop_path}) => {

    backdrop_path = `https://image.tmdb.org/t/p/original/${backdrop_path}`

    return (
       
            <Carousel>
             <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src={backdrop_path}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>2</p>
          </Carousel.Caption>
          
        </Carousel.Item>
        
 </Carousel> 
       
    )
}

export default CarruselCard
