import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
const DivContainer = styled.div`
/* background-color:gray; */
display:flex;
justify-content:center;
padding-top:30px;
flex-wrap:wrap;
height:auto;
padding:0;
margin:0;
flex:1 1 auto;

@media (max-width:650px){ 
    flex-direction: column;
    align-items:center;
} 

@media ${props => props.theme.breakpoints.small}{ 
    flex-direction: column;
    align-items:center;
}`

const DivImgContainer = styled.div`
    flex-basis:25%;
     height:auto;

@media ${props => props.theme.breakpoints.medium}{
  width:180px;
 height:auto;
 margin-left:30px;

} 

@media ${props => props.theme.breakpoints.small}{ 
  width:120px;
 height:auto;
 margin-left:15px;
}`

const Img = styled.img`
width:100%;
height:auto;
`
const DivInfo = styled.div`
flex-basis:47%;
margin-left:30px;
padding:20px;
height:300px;

@media ${props => props.theme.breakpoints.medium}{
font-size:${props => props.theme.fontSizes.s};
    width:200px;
    overflow:scroll
}

@media ${props => props.theme.breakpoints.small}{ 
    font-size:${props => props.theme.fontSizes.xs};
    width:150px;
}`

const DivTitle = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:20px;
font-size:10px;
@media ${props => props.theme.breakpoints.medium}{ 
} 

@media ${props => props.theme.breakpoints.small}{ 
    font-size:${props => props.theme.fontSizes.xs};}`

const Title = styled.h2`
font-size:25px;
@media ${props => props.theme.breakpoints.medium}{ 
 font-size:${props => props.theme.fontSizes.m};}

 @media ${props => props.theme.breakpoints.small}{
    font-size:${props => props.theme.fontSizes.s};
}`

const Subtitulo = styled.h3`
 font-size:${props => props.theme.fontSizes.l};

 @media ${props => props.theme.breakpoints.medium}{ 
 font-size:${props => props.theme.fontSizes.l};
 
 }
 @media ${props => props.theme.breakpoints.small}{ 
    font-size:8px;
 }
 `
const OpenVideo = styled.p`
font-size:${props => props.theme.fontSizes.m};
font-weight:700;
`

const MovieDetails = () => {

    const [detail, setDetail] = useState({})
    const params = useParams()
    useEffect(() => {
        window.scroll(0, 0);
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6c78ff8e971663d6ee470502622fe044&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data =>//console.log(data))
                setDetail(data))
    }, [params.id])


    const backdrop_path = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`
    // const poster_path = `https://image.tmdb.org/t/p/original/${detail.poster_path}`

    const Div = styled.div`
    background:url(${`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    color:white;
    display:flex;
    justify-content:center;
    padding-top:40px;
    zoom: 1;
    `
  
    return (
        <Div>
            <DivContainer>
                <DivImgContainer>
                    <Img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} />
                </DivImgContainer>
                < DivInfo>
                    <DivTitle>
                        <Title>{detail.title}</Title> <OpenVideo><PlayCircleFilledRoundedIcon />Ver trailer</OpenVideo>
                    </DivTitle>
                    <Subtitulo>General</Subtitulo>
                    <p>{detail.overview || 'Descripcion no disponible'}</p>
                    <Subtitulo>Generos</Subtitulo>
                    <ul>
                        {
                            detail.genres?.map(genre => {
                                console.log(genre);
                                return (

                                    <li key={genre.id}>{genre.name}</li>
                                )
                            })
                        }
                    </ul>
                </ DivInfo>
            </DivContainer>
        </Div>
    )
}

export default MovieDetails
