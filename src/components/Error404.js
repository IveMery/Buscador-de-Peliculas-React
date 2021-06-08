 import { useHistory } from "react-router-dom"

import { FlexColumn } from '../styles/Commons'
// import './Error404.css';


const Error404 = () => {
    const history =useHistory()
    return (
        <div className='impostor'>
            <FlexColumn>
                <div>ERROR</div>
                <h1>404</h1>
                <p>No encontramos la pagina que buscabas 😙</p>
                <button className='boton' onClick={()=>history.push('/')}>Llevame a inicio!</button>
           
            <hr />
                <div className='impostors'>
                    hola
                   
                </div>
                </FlexColumn>
       </div>
    )
}

export default Error404
