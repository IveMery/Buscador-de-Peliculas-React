import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Carrusel = () => {

  const [movies, setmovies] = useState([])

  const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?`
  const apiKey = `api_key=6c78ff8e971663d6ee470502622fe044`
  const lenguaje = `&language=es-ES`
  const page = `&page=1`
  const fetchCarousel = BASE_URL + apiKey + lenguaje + page
  const params = useParams() 

  useEffect(() => {
    fetch(fetchCarousel)
      .then(res => res.json()
         .then(data =>//console.log(data.results)))
          (setmovies(data.results))))
  }, [])

  const Img = styled.img`
    height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
`
  const Div = styled.div`
    background-color: #a7a7a7cf;
    margin: 0 auto;
    text-align: center;
    width: 70%;
    padding: 20px;`

  return (

    <Carousel>
      
      {movies &&
        movies.map(movie => {
          const backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
          const id = `/movie/${movie.id}`

          return (
            
            <Carousel.Item key={movie.id}>
              <Img
                className="d-block w-100 slider"
                src={backdrop_path}
                alt={movie.title}
              />
              <Carousel.Caption>
                <Div>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <Link to={`/DetallePelicula/${movie.id}`} key={movie.id}>
                    <Button variant="primary">Ver mas...</Button></Link>
                </Div>
              </Carousel.Caption>
            </Carousel.Item>
            
          );
        })}
    </Carousel>
   

  )
}
export default Carrusel
