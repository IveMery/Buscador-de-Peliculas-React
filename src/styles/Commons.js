import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  padding:2px;
`
export const DivContainer = styled.div`
background-color:${props => props.theme.primary};`

export const Div = styled.div`
    background-color:${props => props.theme.background.primary};
`
export const FlexColumn = styled.div`

  display: flex;
  align-items: center;
  flex-wrap:wrap;
  flex-direction:column;
  padding:2px;
`
export const Title = styled.h5`
font-family: ${props => props.theme.fonts.titulos};
color:${props => props.theme.colors.textPrimary};
text-align:center;
margin:${props => props.theme.marginTitles.margin};
padding-top:${props => props.theme.marginTitles.paddingTop};
`
export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:white;
    }
    cursor: pointer;
    color:white;
`




