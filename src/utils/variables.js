export const API_KEY = `6c78ff8e971663d6ee470502622fe044`
export const BASE_URL = `https://api.themoviedb.org/3/movie`
export const BASE_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?`
export const URL_ULTIMOS_LANZAMIENTOS = `${BASE_URL}/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
export const URL_POPULARES = `${BASE_URL}/popular?api_key=${API_KEY}&language=es-ES&page=1`
export const URL_SEARCH = `${BASE_URL_SEARCH}api_key=${API_KEY}&language=es-ES&query=search&page=1`
export const URL_TENDENCIAS =`${BASE_URL}/trending/movie/week?api_key=${API_KEY}5&language=es-ES&page=1`
export const backdrop_path_img = `https://image.tmdb.org/t/p/original/`

export const resultadosHome = (array) => {
    return array.slice(0, 5)
  }


 // https://api.themoviedb.org/3/movie/upcoming?api_key=c7e318bc4679faa16a6f940e1435e019&language=es-ES&page=1