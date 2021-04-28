  
import React, { useState, useEffect } from 'react';

const UltimosLanzamientos = () => {

useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6c78ff8e971663d6ee470502622fe044&languaje=es-ES&page=1')
    .then(res =>res.json()
    .then(data =>console.log(data)))
})


    return (
        <div>
            <h3>ultimos lanzamientos</h3>

            <div>
              
                <div>
                    <h4>titulo</h4>
                </div>
            </div>
        </div>
    )
}

export default UltimosLanzamientos
