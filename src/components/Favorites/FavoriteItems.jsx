

function FavoriteItems ({gifFaves}) {


  return(

    <>
    {/* Create .map favorite DB to display favorites */}
    {/* {JSON.stringify(gifFaves)} */}
    {
      gifFaves.map(gif => (
        <div key={gif.id}>
          {/* needs to change to accomodate actual data information from table */}
          <img src={'#'} alt={gif.url} />
          <button >Dropdown</button>
        </div>
        // Dropdown to select a category for each favorite
      ))
    }
    </>
  )
}

export default FavoriteItems;