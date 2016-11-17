require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FlatButton from 'material-ui/FlatButton';


let logotwixtaz = require('../images/twix_white.png');


const Menuleft = () => (
  <div>
	<img className="logo" src={logotwixtaz} alt="logo_twixtaz" />
	    <div>
		    <div ><FlatButton id="klik" rippleColor='#616161' labelStyle={{fontSize: '18px'}} className="menupole" label="Rozvrh"  /></div>
		    <div ><FlatButton id="klik" rippleColor='#616161' labelStyle={{ fontSize: '18px' } } className="menupole" label="Adminirstrace" /></div>
		    <div ><FlatButton id="klik" rippleColor='#616161' labelStyle={{ fontSize: '18px' }} className="menupole" label="Kontaktujte nás" /></div>
	    </div>
	<div><a className="odkaz" href="http://twixtaz.cz">www.twixtaz.cz</a></div>
  </div>
);

export default Menuleft;