import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App(props) {

    // TODO: Remove useEffect, make it a post instead of a get
    // TODO: Comma after '/search' and add object to send -> access as req.body.value in server.js

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
