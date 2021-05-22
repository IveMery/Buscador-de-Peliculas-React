import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { resultadosHome } from '../utils/variables'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';
import { CentrarElementos, Title , StyledLink} from './Commons'
import PeliculasTendenciaDetalle from './PeliculasTendenciaDetalle'
import useFetch from '../hooks/useFetch'

const Div = styled.div`
background-color:${props => props.theme.background.primary};
display:flex;
flex-direction:column;
justify-content:center;
text-decoration:none;
`
const DivTitle = styled.div`
background-color:${props => props.theme.background.primary};
width:50%;
display:flex;
justify-content:center;
margin-top:20px;
`


const PeliculasTendencia = () => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES&page=1')
            .then(res => res.json())
            .then(data =>
                setmovies(resultadosHome(data.results)))
    }, [])

  return (
        <Div>
            <StyledLink to='/PeliculasTendenciaDetalle'>
                <DivTitle>
                    <Title>
                        PELICULAS QUE SON TENDENCIA <ArrowForwardIcon />
                    </Title>
                </DivTitle>
            </StyledLink>
            <CentrarElementos>
                {movies?.map(({ title, poster_path, id }) => (
                    <StyledLink to={`/DetallePelicula/${id}`} key={id}>
                        <Cards
                            title={title}
                            poster_path={poster_path}
                            key={id}
                            id={id}
                        />
                    </StyledLink>
                ))}

            </CentrarElementos>
        </Div>
    )
}


export default PeliculasTendencia
