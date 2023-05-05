import {useState} from 'react';
import axios from 'axios';
import './Search.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Search() {

    const [searchInput, setSearchInput] = useState('');
    const [gifUrls, setGifUrls] = useState([]);

    const history = useHistory();
    const dispatch = useDispatch();

    const addFavorite = (event) => {
        let favoriteToAdd = event.target.parentElement.firstChild.src

        dispatch({ type: 'SET_FAVORITE', 
        payload: favoriteToAdd })

        axios.post('/api/favorite', {
            url: favoriteToAdd
        }).then(res => {
            console.log(res.data);
        })
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

    const toFavorites = () => {
        history.push('/favorites');
    }

    return (
        <>
            <h3>Search</h3>
            <input type="text" onChange ={handleSearchChange} />
            <button onClick={submitSearch}>Search</button>
            <br /><br />
            <button onClick={toFavorites}>Favorites List</button>
            <br /><br />
            {
                gifUrls.map(gif => {
                    return (
                        <div key={gif.id}>
                            <img className="gifs" src={gif.images.downsized_medium.url} />
                            <br />
                            <button onClick={addFavorite}>Favorite</button>
                            <br /><br /><br />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Search;