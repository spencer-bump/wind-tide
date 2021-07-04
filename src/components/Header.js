import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu" >
      <Link to="/winds" className="ui item" >
        Winds
      </Link>
      <Link to="/tides" className="ui item" >
        Tides
      </Link>
      <Link to="/temps" className="ui item" >
        Temps
      </Link>
      <div className="right menu" >

      </div>
    </div>
  )
}


export default Header;