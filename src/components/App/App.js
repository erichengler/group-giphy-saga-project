import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App(props) {
  const [gifUrls, setGifUrls] = useState('');

  useEffect(() => {
    axios.get('/search').then(response => {
      console.log(response.data);
    
      setGifUrls(response.data.data);
    }).catch(error => {
      console.log(error);
      alert(`Oops, I did it again.`);
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        
        <Route exact path="/">
          <Search gifUrls={gifUrls}/>
        </Route>

        <Route exact path="/favorites">
          <Favorites />
        </Route>

      </Router>
    </div>
  );
}

export default App;
