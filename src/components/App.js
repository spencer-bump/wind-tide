import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Winds from './weather/Winds';
import Tides from './tides/Tides';
import Temps from './temps/Temps';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Winds} />
          <Route path="/tides" exact component={Tides} />
          <Route path="/winds" exact component={Winds} />
          <Route path="/temps" exact component={Temps} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
