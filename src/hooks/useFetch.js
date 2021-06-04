import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [movies, setMovie] = useState([])
  const [numOfPages, setNumOfPages] = useState();
  const [loading,setLoading]= useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovie(data.results || data)
        window.scroll(0, 0)
        setLoading(false)
        setNumOfPages(data.total_pages)
        
      })
  }, [url, numOfPages])
  return [movies, numOfPages , loading ,]
}

export default useFetch