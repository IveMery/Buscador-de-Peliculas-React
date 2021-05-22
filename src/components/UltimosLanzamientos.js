// import React, { useState, useEffect } from 'react';
import Cards from './Cards'

import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
// import { Movie } from '@material-ui/icons';
import useFetch from '../hooks/useFetch'
import { URL_ULTIMOS_LANZAMIENTOS } from '../utils/variables'
import { CentrarElementos, Title, Div ,StyledLink} from './Commons'
// import styled from 'styled-components'

const UltimosLanzamientos = () => {

    const params = useParams()
    const movies = useFetch(URL_ULTIMOS_LANZAMIENTOS)

    return (
        <Div >
            <Title>ULTIMOS LANZAMIENTOS</Title>
            <CentrarElementos>
                {movies?.map((movie) => (
                    <StyledLink to={`/DetallePelicula/${movie.id}`} key={movie.id}>
                        <Cards
                            title={movie.title}
                            movie={movie}
                            poster_path={movie.poster_path}
                        />
                    </StyledLink>
                ))}
            </CentrarElementos>
        </Div>
    )
}

export default UltimosLanzamientos
