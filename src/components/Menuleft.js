require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FlatButton from 'material-ui/FlatButton';

let logotwixtaz = require('../images/twix_white.png');

const Menuleft = () => (
  <div>
	<img className="logo" src={logotwixtaz} alt="logo_twixtaz" />
	    <div>
		    <FlatButton label="Rozvrh" primary={true} />
		    <FlatButton label="Adminirstrace" primary={true} />
		    <FlatButton label="Kontaktní formulář" primary={true} />
	    </div>
  </div>
);

export default Menuleft;