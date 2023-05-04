import {useState} from 'react';
import CategoryBtn from './CategoryBtn.jsx';

function FavoriteItems ({gifFaves}) {
  const [open, setToggleOpen] = useState(false);



  return(

    <>
    {/* Create .map favorite DB to display favorites */}
    {/* {JSON.stringify(gifFaves)} */}
    {
      gifFaves.map(gif => (
        <div key={gif.id}>
          {/* needs to change to accomodate actual data information from table */}
          <img src={'#'} alt={gif.url} />
          <CategoryBtn 
          key={gif.id}
          gif={gif}
          open={open}
          setToggleOpen={setToggleOpen}
          
          />
        </div>
      ))
    }
    </>
  )
}

export default FavoriteItems;