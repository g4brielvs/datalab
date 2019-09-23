import React from 'react';
import PropTypes from 'prop-types';
import { Paper, IconButton, Grid } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './viz-detail.module.scss';

export default class VizDetailPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <Paper className={styles.details}>
      <Grid container>
        <Grid item>
          {this.props.children}
        </Grid>
        <Grid item>
          <IconButton className={styles.closeButton}>
            <HighlightOffIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

VizDetailPanel.propTypes = {
  children: PropTypes.node.isRequired
};
