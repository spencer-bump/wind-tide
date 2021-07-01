import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Weather from './weather/Weather';
import Tides from './tides/Tides';
import Header from './Header';
import Welcome from './Welcome';

const App = () => {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Welcome} />
          <Route path="/tides" exact component={Tides} />
          <Route path="/weather" exace component={Weather} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
