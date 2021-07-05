import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Weather from './weather/Weather';
import Tides from './tides/Tides';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Weather} />
          <Route path="/tides" exact component={Tides} />
          <Route path="/weather" exact component={Weather} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
