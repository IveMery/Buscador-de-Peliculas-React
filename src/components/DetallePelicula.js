
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
// import InfoMovie from './InfoMovie'

import styled from 'styled-components'



const DetallePelicula = () => {

    const [detalle, setDetalle] = useState({})


    const params = useParams()


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6c78ff8e971663d6ee470502622fe044&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data =>//console.log(data))
                setDetalle(data))
    }, [])
    console.log(detalle);

    const backdrop_path = `https://image.tmdb.org/t/p/original/${detalle.backdrop_path}`
    const poster_path = `https://image.tmdb.org/t/p/original/${detalle.poster_path}`

    const Div = styled.div`
    background:url(${backdrop_path});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;`
    const DivContainer = styled.div`
    background-color:gray;
  
    width:600px;    `

    const DivTitle =styled.div `
    display:flex;
    justify-content:space-around;`



    return (
        <Div>
            <DivContainer>

                {/* <div>  <img src={poster_path} /></div> */}
                
                <DivTitle>
                <h2>{detalle.title}</h2> <p>ver trailer</p>
                </DivTitle>
                    <div>
                    <p>{detalle.overview}</p>
                    <h6>Generos</h6>
                    </div>

            </DivContainer>


        </Div>


    )
}

export default DetallePelicula
