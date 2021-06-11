import React, { useState } from 'react'
import { StyledLink } from '../styles/Commons'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import styled from 'styled-components'
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import CancelIcon from '@material-ui/icons/Cancel';

const Navbar = styled.ul`
    margin-bottom: 0;
    display:flex;
    flex-wrap:wrap;
    height:60px;
    align-items:center;

    @media ${props => props.theme.breakpoints.large}{
        width:100%;
        height:100vh;
        position:absolute;
        top:60px;
        left: ${({ click }) => (click ? "0" : "-100%")};
        flex-direction:column;
        transition:0.5s all ease-in;
        background-color: rgb(35, 39, 42);
    }`

const NavItem = styled.li`
    font-family: 'Bebas Neue','sans-serif';
    font-size: 20px; 
    list-style:none;
    padding:10px;

    &:hover{
        background-color: rgb(35, 39, 60);
        border-bottom:0.2rem solid #f50057;
        transition: 0.3s ease-in;
        border-radius:1px;
        height:45px;
        border-radius:5px;
    }
    
    @media ${props => props.theme.breakpoints.large}{
        padding-top:10px;
        margin-bottom:30px;
    }`

 const BtnMenu = styled.button`
    display:none;
    padding:20px;
    height:59px;
    background-color:rgb(35, 39, 42);
    border:none;
    
    &:focus{
    outline:none;
    }

    @media ${props => props.theme.breakpoints.large}{
    display:flex;
    color:#ebc08b;
    font-size:2rem;
    }
    `
 const Nav = () => {

    const [click, setClick] = useState(false);

    const openMenu = () => {
        setClick(!click)
    }

    return (
        <>
            <BtnMenu onClick={() => openMenu()}>
                {click ? <CancelIcon aria-label='close menu' fontSize='large' color='secondary' /> : <MenuRoundedIcon aria-label='menu' fontSize='large' color='secondary' />}
            </BtnMenu>
            <Navbar click={click}>
                <NavItem onClick={() => openMenu()}><StyledLink to='/'>Inicio</StyledLink></NavItem>
                <NavItem onClick={() => openMenu()}><StyledLink to='/NowPlaying'>Ultimos Lanzamientos</StyledLink></NavItem>
                <NavItem onClick={() => openMenu()}> <StyledLink to='/Popular' >Populares</StyledLink></NavItem>
                <NavItem onClick={() => openMenu()}> <StyledLink to='/Buscar' >Buscar</StyledLink></NavItem>
                <MovieFilterIcon color='secondary' fontSize='large' />
            </Navbar>
        </>
    )
}

export default Nav
