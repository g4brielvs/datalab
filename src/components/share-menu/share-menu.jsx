import React, { Component } from 'react';
import './share-menu.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class ShareMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(e) {
    e.stopPropagation();
    this.setState(state => ({
      open: !state.open
    }));
  }

  render() {
    return (
      '< Share'
    )
  }
}

export default ShareMenu;
