import React from 'react';
import PropTypes from 'prop-types';
import styles from './express-module.module.scss';

import { Grid } from '@material-ui/core';

export default class ExpressModule extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <div className={styles.module}>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <div className={styles.title}>
            {this.props.title}
          </div>
          <div className={styles.subtitle}>
            {this.props.subtitle}
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
        </Grid>
      </Grid>

      {this.props.children}
    </div>
}

ExpressModule.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
