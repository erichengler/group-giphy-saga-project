import './Search.css'

function Search({ gifUrls }) {

    console.log(gifUrls)

    const addFavorite = () => {
        // TODO: POST Request to favorite DB
    }

    return (
        <>
            <h3>Search</h3>
            {
                gifUrls.map(gif => {
                    return (
                        <div key={gif.id}>
                            <img className="gifs" src={gif.images.downsized_medium.url} />
                            <br />
                            <button onClick={(e) => addFavorite(e)}>Favorite</button>
                            <br /><br /><br />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Search;