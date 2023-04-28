import './Search.css'

function Search({ gifUrls }) {

    console.log(gifUrls)

    const addFavorite = () => {
        // TODO: POST Request to favorite DB
    }

    const submitSearch = () => {
        // TODO: GET request that sends req (search input)
    }

    return (
        <>
            <h3>Search</h3>
            <input type="text" />
            <button onClick={submitSearch}>Search</button>
            <br /><br />
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