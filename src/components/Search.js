import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const Search = () => {

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleChange = e => setSearch(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        setSearch('')
    }

    const BASE_URL = `https://api.themoviedb.org/3/search/movie?`
    const apiKey = `api_key=6c78ff8e971663d6ee470502622fe044`
    const searchQuery = `&languaje=es-ES&query=${search}`
    const page = `&page=1`

    const searchString = BASE_URL + apiKey + searchQuery + page

    useEffect(() => {
        search &&
            fetch(searchString)
                .then(res => res.json())
                .then(data =>//console.log(data.results))
                    setMovies(data.results))
    }, [search])

    const handleClick = id => console.log(` me hicienron click en la tarjeta con el id `, id);

    return (
        <div>
            <h2>Buscar Pelicula</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic"
                    placeholder=' ej los simpson...'
                    onChange={handleChange}
                    value={search}
                />
            </form>
            <>
                <Typography variant='h5' gutterBottom align='center'>Resultados</Typography>
                <Box display="flex"
                    justifyContent='center'
                    //border={1}
                    flexWrap="wrap"
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
        </div>
    )
}

export default Search
