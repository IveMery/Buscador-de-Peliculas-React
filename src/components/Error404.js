import { useHistory } from "react-router-dom"
import React from 'react'
import Typed from 'react-typed';
import { FlexColumn, Div } from '../styles/Commons'
import styled from 'styled-components'

const ImgContainer = styled(Div)`
width:300px;
height:300px;

@media ${props => props.theme.breakpoints.small}{ 
    width:200px;
    height:200px;
}
@media ${props => props.theme.breakpoints.extraSmall}{ 
    width:200px;
    height:200px;
}`
const Title = styled.h5`
color:${props => props.theme.colors.textSecondary};
font-size:${props => props.theme.fontSizes.xxxl};
margin-top:20px;

@media (max-width:650px){ 
    font-size:${props => props.theme.fontSizes.xl};
} 

@media ${props => props.theme.breakpoints.small}{ 
    font-size:${props => props.theme.fontSizes.l};
}` 

const Img = styled.img`
width:100%;
height:auto;
`
const Button = styled.button`
  background-color: #343A40;
  border-radius: 4px;  
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  padding: 8px 16px;
  border:1px solid black;
  margin-top:40px;
  margin-bottom:40px;
  &:hover{
   background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
   animation:slidebg 2s linear infinite;
   @keyframes slidebg {
  to {
    background-position:15vw;
    }
   }
}`

const Error404 = () => {
    const history = useHistory()
    return (
        <FlexColumn>
            <Title>
                <Typed
                    strings={['Lo sentimos', 'No encontramos la página', 'Error 404 :(']}
                    typeSpeed={50}
                    backSpeed={60}
                />
            </Title>
            <Button onClick={() => history.push('/')}>Llevame al inicio</Button>
            <ImgContainer className='unicorn'>
                <Img src='https://64.media.tumblr.com/tumblr_m76nigZNg61r0dqveo1_500.gifv' />
            </ImgContainer>
        </FlexColumn>
    )
}

export default Error404
