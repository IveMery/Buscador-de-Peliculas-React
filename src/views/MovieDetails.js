import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import Button from '@material-ui/core/Button';
import ModalVideo from "react-modal-video"
import '../styles/modal.css'
import useFetch from '../hooks/useFetch'


const theme = createMuiTheme({
    typography: {
        fontSize: 13,
      
    },
  
  })


const DivContainer = styled.div`
display:flex;
justify-content:center;
//padding-top:30px;
padding-top:0;
flex-wrap:wrap;
height:auto;
padding:0;
margin:0;
flex:1 1 auto;
padding-top: 40px;
background-color:rgba(54, 53, 53, 0.664);
height:100%;

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
  width:180px;
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
  font-size:${props => props.theme.fontSizes.m};
  width:200px;
  overflow:scroll
}

@media ${props => props.theme.breakpoints.small}{ 
  font-size:${props => props.theme.fontSizes.m};
  width:200px;
}`

const DivTitle = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
  font-size:10px;
 

@media ${props => props.theme.breakpoints.medium}{ 
    padding:0;
} 

@media ${props => props.theme.breakpoints.small}{ 
    font-size:${props => props.theme.fontSizes.m};}`

const Title = styled.h2`
font-size:25px;
@media ${props => props.theme.breakpoints.medium}{ 
 font-size:${props => props.theme.fontSizes.m};}
 margin-right:5px;

 @media ${props => props.theme.breakpoints.small}{
    font-size:${props => props.theme.fontSizes.m};
}`

const Subtitulo = styled.h3`
 font-size:${props => props.theme.fontSizes.l};

 @media ${props => props.theme.breakpoints.medium}{ 
 font-size:${props => props.theme.fontSizes.l};
 
 }
 @media ${props => props.theme.breakpoints.small}{ 
    font-size:15px;
 }
 `
 
 const Note =styled.span`
 @media ${props => props.theme.breakpoints.medium}{ 
 font-size:${props => props.theme.fontSizes.xs};
 
 }
 
`
const MovieDetails = () => {


    const params = useParams()
    const [isOpen, setOpen] = useState(false)
    const [movies] = useFetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6c78ff8e971663d6ee470502622fe044&language=es-ES&page=1`)
    const [video] = useFetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=c7e318bc4679faa16a6f940e1435e019&languaje=es-ES`)

    //const backdrop_path = `https://image.tmdb.org/t/p/original/${movies.backdrop_path}`
    // const poster_path = `https://image.tmdb.org/t/p/original/${movies.poster_path}`
    const Div = styled.div`
    background:url(${`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    color:white;
    display:flex;
    justify-content:center;
    //padding-top:40px;
    zoom: 1;
    
    `


    return (
        <Div>
            {video.length > 0
                && <ModalVideo
                    channel='youtube'
                    isOpen={isOpen}
                    videoId={video[0].key}
                    onClose={() => setOpen(false)}
                />}
            <DivContainer>
                <DivImgContainer>
                    <Img src={movies.poster_path ? `https://image.tmdb.org/t/p/original/${movies.poster_path}` : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"}
                        alt={movies.title} />
                </DivImgContainer>
                < DivInfo>
                    <DivTitle>
                        <Title>{movies.title}</Title>
                        {video.length > 0 ? 
                         <ThemeProvider theme={theme}>
                            <Button
                            variant="contained"
                            color="primary"
                            size="small"
                           
                         
                            
                            onClick={() => setOpen(true)}>
                            <PlayCircleFilledRoundedIcon 
                            fontSize="small"/>
                                Ver Trailer
                                </Button>
                                </ThemeProvider>
                            : <ThemeProvider theme={theme}><Button
                                variant="contained"
                                color="secondary"
                                size="small"
                              
                               
                                onClick={() => setOpen(true)}>
                                <PlayCircleFilledRoundedIcon
                                fontSize="small"/>
                                <Note>Trailer no disponible</Note>
                                        
                                </Button></ThemeProvider>}
                    </DivTitle>
                    <Subtitulo>General</Subtitulo>
                    <p>{movies.overview || 'Descripcion no disponible'}</p>
                    <Subtitulo>Generos</Subtitulo>
                    <ul>
                        {movies.genres?.map(genre => {
                            return (<li key={genre.id}>{genre.name}</li>)
                        })}
                    </ul>
                </ DivInfo>
            </DivContainer>
        </Div>
    )
}

export default MovieDetails
