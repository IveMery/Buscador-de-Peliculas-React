import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import useFetch from '../hooks/useFetch'
import { URL_POPULARES } from '../utils/variables'
import Typography from '@material-ui/core/Typography';
import { CentrarElementos , Title, Div} from './Commons'
import { Link } from 'react-router-dom'

const Populares = () => {

    const movies = useFetch(URL_POPULARES)

    return (
        <Div>
            <Title>POPULARES</Title>
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

export default Populares
