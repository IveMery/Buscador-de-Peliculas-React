import Carousel from '../views/Carousel'
import Trending from '../views/Trending'
import TopRated from '../views/TopRated'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme'

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Carousel />
                <Trending />
                <TopRated />
            </>
        </ThemeProvider >
    )
}

export default Home
