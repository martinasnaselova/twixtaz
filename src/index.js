import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Menuleft from './components/Menuleft.js';
import Upperline from './components/Upperline.js';
import Bodysheet from './components/Body.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Menul = () => (
  <MuiThemeProvider>
    <Menuleft />
  </MuiThemeProvider>
);

const Upperl = () => (
  <MuiThemeProvider>
    <Upperline/>
  </MuiThemeProvider>
);

const Bodys = () => (
  <MuiThemeProvider>
    <Bodysheet/>
  </MuiThemeProvider>
);


ReactDOM.render(<Menul />, document.getElementById('menuleft'));
ReactDOM.render(<Upperl />, document.getElementById('upperline'));
ReactDOM.render(<Bodys />, document.getElementById('bodysheet'));
