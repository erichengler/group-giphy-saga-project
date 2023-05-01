import {useState} from 'react';

function FavoriteItems ({gifFaves}) {
  const [open, setToggleOpen] = useState(false);

  const toggleDropdown = () => {
    // console.log(open)
    setToggleOpen(!open)
  }

  return(

    <>
    {/* Create .map favorite DB to display favorites */}
    {/* {JSON.stringify(gifFaves)} */}
    {
      gifFaves.map(gif => (
        <div key={gif.id}>
          {/* needs to change to accomodate actual data information from table */}
          <img src={'#'} alt={gif.url} />
          <div className="btnContainer" onClick={toggleDropdown}>
            <button className="dropButton">set category:</button>
            {/* Drop down still needs work. Had issues with previous idea. */}
          </div>
        </div>
      ))
    }
    </>
  )
}

export default FavoriteItems;