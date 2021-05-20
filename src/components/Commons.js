import styled from 'styled-components';

export const CentrarElementos = styled.div`
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
export const CentrarEnColumna = styled.div`

  display: flex;
  align-items: center;
  flex-wrap:wrap;
  flex-direction:column;
  padding:2px;
`
// export const margenTitulos = styled.h2`
//  margin:20px 0 20px 0;`

export  const Title = styled.h5`
font-family: ${props => props.theme.fonts.titulos};
color:${props => props.theme.colors.textPrimary};
text-align:center;
margin:${props => props.theme.marginTitles.margin};
padding-top:${props => props.theme.marginTitles.paddingTop}
`



