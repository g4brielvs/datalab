import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import styles from './viz-detail.module.scss';

export default class VizDetailPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <Paper className={styles.details}>
      {this.props.children}
    </Paper>);
};

VizDetailPanel.propTypes = {
  children: PropTypes.node.isRequired
};
