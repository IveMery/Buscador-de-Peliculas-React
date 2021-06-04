import React from 'react'
import './Loading.css';
import styled from 'styled-components';

export const Div = styled.div`
    background-color:#ece8e842;;
    height:100%;
    width:100%;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
`
const Loading = () => {
  return (

    <Div>
      <div className="loadingio-spinner-bean-eater-uqao2wsak3"><div className="ldio-r6tsle4qd9p">
        <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
      </div></div>

    </Div>
  )
}

export default Loading