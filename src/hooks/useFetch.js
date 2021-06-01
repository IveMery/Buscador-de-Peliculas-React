import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [movies, setMovie] = useState([])
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovie(data.results)
        window.scroll(0, 0)
        console.log(data.results);
        setNumOfPages(data.total_pages)
      })
  }, [url, numOfPages])
  return [movies, numOfPages]
}

export default useFetch