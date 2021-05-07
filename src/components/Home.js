import Carrusel from './Carrusel'
import PeliculasTendencia from './PeliculasTendencia'

import styled from 'styled-components'

const Home = () => {

    const Div = styled.div`
    background-color: rgb(54, 57, 63);`
    return (
        <Div>
            <Carrusel />
            <PeliculasTendencia />
            <h1>En Home</h1>
        </Div>
    )
}

export default Home
