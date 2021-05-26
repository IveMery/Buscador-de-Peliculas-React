import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'
import {URL_TOPRATED } from '../utils/variables'
import { FlexCenter, Title, Div, StyledLink } from '../styles/Commons'

const TopRatedDetails = () => {

    const movies = useFetch(URL_TOPRATED)
    return (
        <Div>
        <Title>MEJOR PUNTUADAS</Title>
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
    </Div>
    )
}

export default TopRatedDetails
