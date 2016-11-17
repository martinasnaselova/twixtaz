require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Account_circle from 'material-ui/svg-icons/action/account-circle';
import {grey700} from 'material-ui/styles/colors';



export default class IconMenuExampleControlled extends Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5']
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value
    });
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value
    });
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value
    });
  }


  render() {
    return (
      
      <div>
        <IconMenu className="ikony"
          iconButtonElement={<IconButton><Account_circle className="ikony" color={grey700}/></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
        
      </div>
    );
  }
}