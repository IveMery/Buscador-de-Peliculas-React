import React, { useState, useEffect } from 'react';
import Cards from './Cards'
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import { resultadosHome } from '../utils/variables'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';
import { CentrarElementos ,Title} from './Commons'
import PeliculasTendenciaDetalle from './PeliculasTendenciaDetalle'
import useFetch from '../hooks/useFetch'


const PeliculasTendencia = () => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES&page=1')
            .then(res => res.json())
            .then(data =>
                setmovies(resultadosHome(data.results)))
    }, [])

    const Div = styled.div`
    background-color:${props => props.theme.background.primary};
    display:flex;
    flex-direction:column;
    justify-content:center;
    `
    const DivTitle = styled.div`
    background-color:${props => props.theme.background.primary};
    width:50%;
    display:flex;
    justify-content:center;
    margin-top:20px;
    `

    // const Title = styled.h5`
    // font-family: ${props => props.theme.fonts.titulos};
    // color:${props => props.theme.colors.textPrimary};
    // `
    return (
        <Div>
               <Link to='/PeliculasTendenciaDetalle'>
            <DivTitle>
                <Title>
                    PELICULAS QUE SON TENDENCIA <ArrowForwardIcon />
                </Title>
            </DivTitle>
            </Link>
            <CentrarElementos>
                {movies && movies.map((movie) => (
                     <Link to={`/DetallePelicula/${movie.id}`} key={movie.id}>
                    <Cards
                        title={movie.title}
                        poster_path={movie.poster_path}
                        key={movie.id}
                        id={movie.id}
                    />
                   </Link>
                ))}
                
            </CentrarElementos>
        </Div>
         )
}


export default PeliculasTendencia
