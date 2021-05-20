import Carrusel from './Carrusel'
import PeliculasTendencia from './PeliculasTendencia'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme'

const Div = styled.div`
//background-color: rgb(54, 57, 63);
`


const Home = () => {

    return (
        <ThemeProvider theme={theme}>
        <Div>

            <Carrusel />

            <PeliculasTendencia />
           
        </Div>
        </ThemeProvider >
    )
}

export default Home
