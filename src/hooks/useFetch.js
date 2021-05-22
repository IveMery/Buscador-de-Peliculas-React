  
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
      try{
        fetch(url)
        .then(res => res.json())
        // data.results 
        .then(data => setPeliculas(data.results))
      }
      catch(err){
          console.log(err);
      }

  }, [])


  return peliculas
}

export default useFetch