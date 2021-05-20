  
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
      try{
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results))
      }
      catch(err){
          console.log(err);
      }

  }, [])


  return movies
}

export default useFetch