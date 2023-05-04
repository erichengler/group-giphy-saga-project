import { HashRouter as Router, Route } from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App(props) {

  const [gifFaves, setGifFaveList] = useState([])
  
  return (
    <div className='App'>
      <Router>
        
        <Route exact path="/">
          <Search />
        </Route>

        <Route exact path="/favorites">
          <Favorites 
          gifFaves={gifFaves}
          setGifFaveList={setGifFaveList}
          />
        </Route>

      </Router>
    </div>
  );
}

export default App;
