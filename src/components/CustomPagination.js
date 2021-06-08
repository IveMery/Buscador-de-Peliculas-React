import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});
const CustomPagination = ({ setPages, numOfPages = 20 }) => {

    const handlePageChange = (pages) => {
        setPages(pages)
        window.scroll(0, 0)
        console.log(pages);
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom:20,
            }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    color="secondary"
                    hideNextButton
                    hidePrevButton />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
