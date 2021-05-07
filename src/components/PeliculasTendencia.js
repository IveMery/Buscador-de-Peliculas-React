import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const PeliculasTendencia = () => {
    const [movies, setmovies] = useState([])

    const handleClick = id => console.log(` me hicienron click en la tarjeta con el id `, id);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES&page=1')
            .then(res => res.json())
            .then(data =>//console.log(data.results))
                setmovies(data.results))
    }, [])


    return (
        <>
            <Typography variant='h5'
                gutterBottom align='flex-start'
                color='primary'
            >Peliculas que son tendencia</Typography>
            <Box display="flex"
                justifyContent='center'
               // border={1}
                flexWrap="wrap"
                margin={2}
                p={2}
            >
                {movies && movies.map((movie) => {
                    return <Cards
                        title={movie.title}
                        poster_path={movie.poster_path}
                        key={movie.id}
                        id={movie.id}
                        handleClick={handleClick} />
                         
                })}
           
            </Box>
        </>
    )
}

export default PeliculasTendencia
