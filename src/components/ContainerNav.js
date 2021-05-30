
import React from 'react'
import Nav from '../views/Nav'
import styled from 'styled-components'


const Container = styled.div`
width:100%;
height:60px;
position:sticky;
top:0;
z-index:99;
position: 'sticky';
    background-color: rgb(35, 39, 42);
`


const ContainerNav = () => {
    return (
        <Container>
            <Nav />
        </Container>

    )
}

export default ContainerNav
