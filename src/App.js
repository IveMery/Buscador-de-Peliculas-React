import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

// import styled from 'styled-components';



import Home from './components/Home'
import NowPlaying from "./views//NowPlaying";
import Populares from "./views/Populares";
import Error404 from "./components/Error404";
import Search from "./views//Search";
import MovieDetails from "./views/MovieDetails"
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme'
import TrendingDetails from "./views/TrendingDetails";
import TopRatedDetails from "./views/TopRatedDetails";
import {StyledLink} from './styles/Commons'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
}



`
const useStyle = makeStyles({
  navitem: {
    color: "white",
    marginRight: "20px",
    fontFamily:'Bebas Neue',
    fontSize:'20px'
   


  },



  navbar: {
    marginBottom: '0',
    position: 'sticky',
    backgroundColor: 'rgb(35, 39, 42)',
    
  }
})



const App = () => {
  const classes = useStyle()
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar className={classes.navbar}>
            <Toolbar>
            {/* <MenuRoundedIcon /> */}
              <StyledLink to='/' className={classes.navitem} >Inicio</StyledLink>
              <StyledLink to='/NowPlaying' className={classes.navitem}>Ultimos Lanzamientos</StyledLink>
              <StyledLink to='/Populares' className={classes.navitem}>Populares</StyledLink>
              <StyledLink to='/Buscar' className={classes.navitem}>Buscar</StyledLink>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/NowPlaying' component={NowPlaying} />
            <Route exact path='/Populares' component={Populares} />
            <Route exact path='/Buscar' component={Search} />
            <Route exact path='/TrendingDetails' component={TrendingDetails} />
            <Route exact path='/TopRatedDetails' component={TopRatedDetails} />
            <Route exact path='/MovieDetails/:id' component={MovieDetails} />

            <Route path='*' component={Error404} />
          </Switch>
        </Router>
      </ThemeProvider>
     

    </div>

  );
}

export default App;
