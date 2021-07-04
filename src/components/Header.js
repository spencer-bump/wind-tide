import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu" >
      <Link to="/weather" className="ui item" >
        Weather
      </Link>
      <Link to="/tides" className="ui item" >
        Tides
      </Link>
      <div className="right menu" >

      </div>
    </div>
  )
}


export default Header;