import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

const useFetch = (url) => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
   
    try {
      fetch(url)
        .then(res => res.json())
        // data.results 
        .then(data => {
          setMovie(data.results)
          console.log(data.results);
        }
        )
    }
    catch (err) {
      console.log(err);
      // setLoading(false)
    }

  }, [url])


  return  movie 
}

export default useFetch