import React from 'react';
import { Link } from 'react-router-dom';

// import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu" >
      <Link to="/weather" className="item" >
        Weather
      </Link>
      <Link to="/tides" className="ui item" >
        Tides
      </Link>
      <div className="right menu" >
        <Link to="/" className="ui item" >
          Tides
        </Link>
        {/*<GoogleAuth />*/}
      </div>
    </div>
  )
}


export default Header;