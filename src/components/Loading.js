import React from 'react'
import { WindMillLoading } from 'react-loadingg';
import styled from 'styled-components';

export const Div = styled.div`
    background-color:rgba(219, 206, 206, 0.6);
    height:100%;
    width:100%;
    z-index:10;
`
const Loading = () => {


    
    return (

        <Div>
            < WindMillLoading />
        </Div>




    )
}

export default Loading
