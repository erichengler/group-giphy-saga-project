function Search ({ gifUrls }) {

    console.log( gifUrls )

    const addFavorite = () => {
        // TODO: POST Request to favorite DB
    }

    return (
        <>
            <h3>Search</h3>
            {/* {
                gifUrls.map(gif => {
                    <div key={gif.id}>
                        <img src={gif.url} />
                        <br />
                        <button onClick={ (e) => addFavorite(e) }>Favorite</button>
                    </div>             
                })
            }            */}
        </>
    )
}

export default Search;