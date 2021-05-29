import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'
import { URL_POPULARES } from '../utils/variables'
import { FlexCenter, Title, Div, StyledLink } from '../styles/Commons'

const Populares = () => {

    const movies = useFetch(URL_POPULARES)
    return (
        <Div>
            <Title>POPULARES</Title>
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

export default Populares
