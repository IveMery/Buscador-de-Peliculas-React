import { Link } from 'react-router-dom'
import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components'
import useFetch from '../hooks/useFetch'
import { URL_CARRUSEL } from '../utils/variables'


const Img = styled.img`
height: 450px;
background-size: cover;
background-repeat: no-repeat;
background-position: center top;`

const Div = styled.div`
background-color: #a7a7a7cf;
margin: 0 auto;
text-align: center;
width: 70%;
padding: 20px;

@media ${props => props.theme.breakpoints.small}{ 
  margin-top:10px;
}
`
const Title = styled.h3`

@media ${props => props.theme.breakpoints.medium}{ 
    font-size:${props => props.theme.fontSizes.m};
}

@media ${props => props.theme.breakpoints.small}{ 
   
   font-size:${props => props.theme.fontSizes.xs};
}

@media ${props => props.theme.breakpoints.small}{
    font-size:${props => props.theme.fontSizes.xs};
}
`
const Description = styled.p`
@media ${props => props.theme.breakpoints.medium}{ 
  font-size:${props => props.theme.fontSizes.s};
        
 
}
 @media ${props => props.theme.breakpoints.small}{ 
  font-size:${props => props.theme.fontSizes.xs};
}

@media ${props => props.theme.breakpoints.small}{
    font-size:${props => props.theme.fontSizes.xs};
}
`

const Carrusel = () => {

  const [movies] = useFetch(URL_CARRUSEL)

  return (
    <Carousel>
      {movies?.map(movie => {
        return (
          <Carousel.Item key={movie.id}>
            <Img
              className="d-block w-100 slider"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <Carousel.Caption>
              <Div>
                <Title>{movie.title}</Title>
                <Description>{movie.overview}</Description>
                <Link to={`/MovieDetails/${movie.id}`} key={movie.id}>
                  <Button variant="primary" size="sm">Ver mas...</Button></Link>
              </Div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}
export default Carrusel
