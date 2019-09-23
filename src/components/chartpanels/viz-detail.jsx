import React from 'react';
import PropTypes from 'prop-types';
import { Paper, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './viz-detail.scss';

export default class VizDetailPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.expandDetails = this.expandDetails.bind(this);
  }

  componentDidMount() {
    this.props.showDetails(this.expandDetails);
  }

  expandDetails() {
    this.setState({ expanded: true });
  }

  closeDetails() {
    this.setState({ expanded: false });
  }

  render = () => (
    <Paper className={'details' + (this.state.expanded ? ' expanded' : '')}>
      <IconButton className='closeButton'
        onClick={() => this.closeDetails()}
      >
        <HighlightOffIcon />
      </IconButton>
      {this.props.children}
    </Paper>
  );
};

VizDetailPanel.propTypes = {
  showDetails: PropTypes.objectOf(PropTypes.func),
  children: PropTypes.node.isRequired
};
