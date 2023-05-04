import {useState} from 'react';
import axios from 'axios';
import './Search.css'

function Search() {

    const [searchInput, setSearchInput] = useState('');
    const [gifUrls, setGifUrls] = useState([]);

    const addFavorite = () => {
        // TODO: POST Request to favorite DB
    }

    const submitSearch = () => {
        axios.post('/search', {
            value: searchInput
        } ).then(res => {
            console.log(res.data);
            setGifUrls(res.data.data);
          }).catch(error => {
            console.log(error);
            alert(`Oops, I did it again.`);
          });
    }

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value)
    }

    return (
        <>
            <h3>Search</h3>
            <input type="text" onChange ={handleSearchChange} />
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