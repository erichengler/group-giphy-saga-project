import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App(props) {
  return (
    <div className='App'>
      <Router>

        <Route exact path="/">
          <Search />
        </Route>

        <Route exact path="/favorites">
          <Favorites />
        </Route>

      </Router>
    </div>
  );
}

export default App;
