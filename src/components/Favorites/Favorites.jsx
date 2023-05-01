import {useEffect} from 'react';
import axios from 'axios';
import FavoriteItems from './FavoriteItems.jsx';

// ! I keep forgetting to put the curly brackets here.
// !! DON'T FORGET THE CURLY BRACKETS FOR PROPS - GD
function Favorites ({gifFaves, setGifFaveList}) {
    

    // TODO: GET request from favorite DB
    useEffect(() => {
        axios.get('/api/favorite').then(response => {
            setGifFaveList(response.data);
        }).catch((error) => {
            console.log(error);
            alert(`Something went wrong.`)
        });
    }, []);


    return (
        <>
            <h3>Favorites</h3>  
            <FavoriteItems 
            gifFaves={gifFaves}
            />
        </>
    )
}

export default Favorites;