import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [movies, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const [numOfPages, setNumOfPages] = useState();

  

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovie(data.results || data)
        window.scroll(0, 0)
        setNumOfPages(data.total_pages)
        setLoading(false)

      })
  }, [url, numOfPages])
return [movies,numOfPages, /*loading*/]
}

export default useFetch