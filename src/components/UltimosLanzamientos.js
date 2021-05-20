import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import { Movie } from '@material-ui/icons';
import useFetch from '../hooks/useFetch'
import { URL_ULTIMOS_LANZAMIENTOS } from '../utils/variables'
import { CentrarElementos , Title ,Div} from './Commons'
import styled from 'styled-components'

const UltimosLanzamientos = () => {

    const params = useParams()
    const movies = useFetch(URL_ULTIMOS_LANZAMIENTOS)

    // const Div = styled.div`
    // background-color:${props => props.theme.background.primary};
    // `

    return (
        <Div >
            <Title>ULTIMOS LANZAMIENTOS</Title>
           

            
            <CentrarElementos>
                {movies && movies.map((movie) => (

                    <Link to={`/DetallePelicula/${movie.id}`} key={movie.id}>
                        <Cards
                            title={movie.title}
                            movie={movie}
                            poster_path={movie.poster_path}


                        />
                    </Link>

                ))}
 </CentrarElementos>
              
            </Div>
     

    )
}

export default UltimosLanzamientos
