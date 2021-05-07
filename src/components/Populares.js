import React, { useState, useEffect } from 'react';
import Cards from './Cards'


import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
const Populares = () => {
    const [moviesPopulares, setMoviesPopulares] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6c78ff8e971663d6ee470502622fe044&languaje=es-ES&page=1')
            .then(res => res.json())
            .then(data =>//console.log(data.results))
               (setMoviesPopulares(data.results)))
    }, [])


    
    const handleClick =id=>{
        console.log(` me hicienron click en la tarjeta con el id `,id);
        
            }

    return (
        <>
        <Typography variant='h5' gutterBottom align='center'>Populares</Typography>
        <Box display="flex"
            justifyContent='center'
            //border={1}
            flexWrap="wrap"
            p={2}
        >
            {moviesPopulares && moviesPopulares.map((movie) => {
                return <Cards
                    title={movie.title}
                    poster_path={movie.poster_path}
                    key={movie.id} 
                    id={movie.id}
                    handleClick={handleClick}/>
            })}
           
          
        </Box>
    </>
    )
}

export default Populares
