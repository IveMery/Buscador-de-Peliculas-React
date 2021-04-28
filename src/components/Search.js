
import TextField from '@material-ui/core/TextField';



const handleChange =(e)=>{
    console.log(e.target.value);
}
const Search = () => {



    return (
        <div>
            <h2>Buscar Pelicula</h2>
            <form>
            <TextField id="standard-basic" 
            label="pelicula"
            onChange={handleChange}
             />
               
            </form>
        </div>
    )
}

export default Search
