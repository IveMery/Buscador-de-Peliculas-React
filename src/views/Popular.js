import React, { useState } from 'react';
import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'
import { URL_POPULAR } from '../utils/variables'
import { FlexCenter, Title, Div, StyledLink } from '../styles/Commons'
import CustomPagination from '../components/CustomPagination';

const Populares = () => {
    
    const [pages, setPages] = useState(1)
    const [movies, numOfPages] = useFetch(URL_POPULAR + `${pages}`)

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
            {numOfPages > 1 && <CustomPagination setPages={setPages} numOfPages={numOfPages} />}
        </Div>
    )
}

export default Populares
