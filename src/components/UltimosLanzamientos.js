
import React, { useState, useEffect } from 'react';
import Cards from './Cards'
//import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const UltimosLanzamientos = () => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6c78ff8e971663d6ee470502622fe044&languaje=es-ES&page=1')
            .then(res => res.json())
            .then(data =>//console.log(data.results))
                setmovies(data.results))
    }, [])
    return (
        <>
            <Typography variant='h5' gutterBottom align='center'>Ultimos lanzamientos</Typography>
            <Box display="flex"
                justifyContent='center'
                border={1}
                flexWrap="wrap"
                p={2}
            >
                {movies && movies.map((movie) => {
                    return <Cards
                        title={movie.title}
                        poster_path={movie.poster_path}
                        key={movie.id} />
                })}
                {/* backdrop_path */}
                <Cards />
            </Box>
        </>
    )
}

export default UltimosLanzamientos
