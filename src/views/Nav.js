import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import {StyledLink} from '../styles/Commons'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


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
  
const Nav = () => {
    const classes = useStyle()
    return (
        <AppBar className={classes.navbar}>
        <Toolbar>
        {/* <MenuRoundedIcon /> */}
          <StyledLink to='/' className={classes.navitem} >Inicio</StyledLink>
          <StyledLink to='/NowPlaying' className={classes.navitem}>Ultimos Lanzamientos</StyledLink>
          <StyledLink to='/Popular' className={classes.navitem}>Populares</StyledLink>
          <StyledLink to='/Buscar' className={classes.navitem}>Buscar</StyledLink>
        </Toolbar>
      </AppBar>
    )
}

export default Nav
