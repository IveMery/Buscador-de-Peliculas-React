  
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
      try{
        fetch(url)
        .then(res => res.json())
        // data.results 
        .then(data => setMovie(data.results))
      }
      catch(err){
          console.log(err);
      }

  }, [])


  return movie
}

export default useFetch