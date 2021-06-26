import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Weather from './Weather';
import Tides from './Tides';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Weather} />
          <Route path="/tides" exact component={Tides} />
          <Route path="/weather" exace component={Weather} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
