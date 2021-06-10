import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import NowPlaying from "./views//NowPlaying";
import Popular from "./views/Popular";
import Error404 from "./components/Error404";
import Search from "./views//Search";
import MovieDetails from "./views/MovieDetails"
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme'
import TrendingDetails from "./views/TrendingDetails";
import TopRatedDetails from "./views/TopRatedDetails";
import ContainerNav from "./components/ContainerNav";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
 
}
body{
  background-color:${props => props.theme.background.primary};
}
`
const App = () => {
  return (
    <>
     
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router>
          <ContainerNav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/NowPlaying' component={NowPlaying} />
            <Route exact path='/Popular' component={Popular} />
            <Route exact path='/Buscar' component={Search} />
            <Route exact path='/TrendingDetails' component={TrendingDetails} />
            <Route exact path='/TopRatedDetails' component={TopRatedDetails} />
            <Route exact path='/MovieDetails/:id' component={MovieDetails} />
            <Route path='*' component={Error404} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
