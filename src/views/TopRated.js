import React, { useState, useEffect } from 'react';
import { ResultsHome } from '../utils/variables'
import Cards from '../components/Cards'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styled from 'styled-components';
import { FlexCenter, Title, StyledLink } from '../styles/Commons'

const Div = styled.div`
background-color:${props => props.theme.background.primary};
display:flex;
flex-direction:column;
justify-content:center;
text-decoration:none;
`
const DivTitle = styled.div`
background-color:${props => props.theme.background.primary};
width:50%;
display:flex;
justify-content:center;
margin-top:20px;

@media ${props => props.theme.breakpoints.medium}{ 
    margin-left:${props => props.theme.marginTitlesResponsive.marginLeft} 
}
 @media ${props => props.theme.breakpoints.small}{ 
    margin-left:${props => props.theme.marginTitlesResponsive.marginLeft} 
 }
`
const TopRated = () => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        fetch(' https://api.themoviedb.org/3/movie/top_rated?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1')
            .then(res => res.json())
            .then(data =>
                setmovies(ResultsHome(data.results)))
    }, [])

    return (
        <Div>
            <StyledLink to='/TopRatedDetails'>
                <DivTitle>
                    <Title>
                        PELICULAS MEJOR PUNTUADAS <ArrowForwardIcon />
                    </Title>
                </DivTitle>
            </StyledLink>
            <FlexCenter>
                {movies?.map(({ title, poster_path, id }) => (
                    <StyledLink to={`/MovieDetails/${id}`} key={id}>
                        <Cards
                            title={title}
                            poster_path={poster_path}
                            key={id}
                            id={id}
                        />
                    </StyledLink>
                ))}
            </FlexCenter>
        </Div>
    )
}








export default TopRated
