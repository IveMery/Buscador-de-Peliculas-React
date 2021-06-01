import { useState } from 'react'
import Cards from '../components/Cards'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { URL_NOW_PLAYING } from '../utils/variables'
import { FlexCenter, Title, Div, StyledLink } from '../styles/Commons'
import Loading from '../components/Loading'
import CustomPagination from '../components/CustomPagination';


const NowPlaying = () => {

    const params = useParams()
    const [pages, setPages] = useState(1)

    const [movie, numOfPages] = useFetch(URL_NOW_PLAYING + `${pages}`)
    return (
        <Div >
            <Title>ULTIMOS LANZAMIENTOS</Title>
            <FlexCenter>
                {movie ? movie.map((movie) => (
                    <StyledLink to={`/MovieDetails/${movie.id}`} key={movie.id}>
                        <Cards
                            title={movie.title}
                            movie={movie}
                            poster_path={movie.poster_path}
                        />
                    </StyledLink>
                )) : <Loading />}
            </FlexCenter>
            { numOfPages > 1 && <CustomPagination setPages={setPages} numOfPages={numOfPages} />}
        </Div>
    )
}

export default NowPlaying
