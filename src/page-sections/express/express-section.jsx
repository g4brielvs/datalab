import React from 'react';
import PropTypes from 'prop-types';
import styles from './express-section.module.scss';

import { Grid } from '@material-ui/core';

export default class ExpressSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <div className={styles.section}>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <div className={styles.title}>
            {this.props.title}
          </div>
          <div className={styles.subtitle1}>{this.props.subtitle1}</div>
          <div className={styles.subtitle2}>{this.props.subtitle2}</div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
        </Grid>
      </Grid>

      <div className={styles.viztitle}>{this.props.viztitle}</div>
      {this.props.children}
    </div>
}

ExpressSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle1: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  viztitle: PropTypes.string
}
