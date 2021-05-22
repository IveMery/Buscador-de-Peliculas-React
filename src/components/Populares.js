// import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import useFetch from '../hooks/useFetch'
import { URL_POPULARES } from '../utils/variables'

import { CentrarElementos , Title, Div, StyledLink} from './Commons'
import { Link } from 'react-router-dom'

const Populares = () => {

    const movies = useFetch(URL_POPULARES)

    return (
        <Div>
            <Title>POPULARES</Title>
            <CentrarElementos>
                {movies?.map((movie) => (
                     <StyledLink to={`/DetallePelicula/${movie.id}`} key={movie.id}>
                    <Cards
                        title={movie.title}
                        poster_path={movie.poster_path}
                        key={movie.id}
                        id={movie.id}
                    />
                    </StyledLink>
                ))}

            </CentrarElementos>
        </Div>
    )
}

export default Populares
