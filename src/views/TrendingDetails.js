import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'
import { URL_TRENDING } from '../utils/variables'
import { FlexCenter, Title, Div, StyledLink } from '../styles/Commons'


const TrendingDetails = () => {

    const movies = useFetch( URL_TRENDING)
    return (
        <Div>
        <Title>TENDENCIA</Title>
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

export default TrendingDetails
