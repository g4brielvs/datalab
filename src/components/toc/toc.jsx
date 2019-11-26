import styles from './toc.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

export default class Toc extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () =>
    <section id={styles.TOC}>
      <Grid container justify='space-around'>
        {this.props.sections.map((item, key) =>
          <Grid key={key} className={`${styles.tile}`} xs={12} md={6} xl>
            <Grid container justify='center'>
              <Grid item className={styles.a}>
                <a href={`#section-${item.section}`}>
                  <Grid container>
                    <Grid item className={styles.number} xs={2} md={12} lg={3}>
                      {item.number}
                    </Grid>
                    <Grid item className={styles.section}>
                      {item.section}
                    </Grid>
                  </Grid>
                  <div className={styles.subtitle}>{item.subblurb}</div>
                </a>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </section>
}

Toc.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
}
