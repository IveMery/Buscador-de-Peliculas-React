import Carousel from '../views/Carousel'
import Trending from '../views/Trending'
import TopRated from '../views/TopRated'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme'


const Div = styled.div`

`
const Home = () => {

    return (
        <ThemeProvider theme={theme}>
        <Div>
       
            <Carousel />

            <Trending />
            <TopRated/>
           
           
        </Div>
        </ThemeProvider >
    )
}

export default Home
