// import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards'
import { useParams } from 'react-router-dom'
// import { Movie } from '@material-ui/icons';
import useFetch from '../hooks/useFetch'
import { URL_NOW_PLAYING } from '../utils/variables'
import { FlexCenter, Title, Div ,StyledLink} from '../styles/Commons'
import Loading from '../components/Loading'
// import styled from 'styled-components'

const NowPlaying = () => {

    const params = useParams()
   
    const movies = useFetch(URL_NOW_PLAYING)

    return (
        <Div >
            <Title>ULTIMOS LANZAMIENTOS</Title>
            <FlexCenter>
                {movies ? movies.map((movie) => (
                    <StyledLink to={`/MovieDetails/${movie.id}`} key={movie.id}>
                        <Cards
                            title={movie.title}
                            movie={movie}
                            poster_path={movie.poster_path}
                        />
                    </StyledLink>
                )) : <Loading/>}
            </FlexCenter>
        </Div>
    )
}

export default NowPlaying
