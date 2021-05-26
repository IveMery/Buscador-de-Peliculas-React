import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { FlexCenter, FlexColumn, Title, Div ,StyledLink} from '../styles/Commons'
// import { Link } from 'react-router-dom'
// import Loading  from './Loading'
const DivSearch = styled(Div)`
height:1000vh;

`

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

    const useStyles = makeStyles({
        TextField: {

            width: 500,
            marginTop: 30,
},

    })
    const classes = useStyles();


    return (
        <DivSearch >
            
            <FlexColumn>
                <Title>BUSCAR PELICULA</Title>
                <form onSubmit={handleSubmit}  >
                    <TextField id="standard-basic"
                        InputLabelProps={{
                            style: { color: 'white' },
                        }}
                        InputProps={{
                            style:{color:'white'}
                        }}

                        label=' ej los simpsons...'
                        onChange={handleChange}
                        value={search}
                        className={classes.TextField}
                        color='secondary'
                       


                    />
                </form>
            </FlexColumn>

            {search && <Title>Resultados</Title>}

            <FlexCenter>

                {movies?.map((movie) => (
                    
                    <StyledLink to={`/MovieDetails/${movie.id}`} key={movie.id}>
                   
                        <Cards
                            title={movie.title}
                            poster_path={movie.poster_path}
                            key={movie.id}
                            id={movie.id}
                        />
                    </StyledLink>
                ))}
            </FlexCenter>
           
        </DivSearch>
    )
}

export default Search
