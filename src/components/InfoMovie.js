import styled from 'styled-components'
import {backdrop_path} from '../utils/variables'

const Div = styled.div`
background-color: rgb(54, 57, 63);

`

const infoMovie = ({title,overview, backdrop_path}) => {
    
    return (
        <Div>
            <h2>{title}</h2>
            <p>{overview}</p>
            <img src={backdrop_path}/>
        </Div>
    )
}

export default infoMovie
