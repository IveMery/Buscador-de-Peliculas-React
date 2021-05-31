import Pagination from '@material-ui/lab/Pagination';


const CustomPagination = ({ setPages, numOfPages = 20 }) => {

    const handlePageChange = (pages) => {
        setPages(pages)
        window.scroll(0, 0)
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
            }}>
            <Pagination
                count={numOfPages}
                onChange={(e) => handlePageChange(e.target.textContent)}
                hideNextButton
                hidePrevButton />
        </div>
    )
}

export default CustomPagination
