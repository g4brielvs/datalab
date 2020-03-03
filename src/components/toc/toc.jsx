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

          <Grid item key={key} className={`${styles.tile}`} xs={12} md={6} xl>
            <a href={`#section-${item.anchor}`}>
              <Grid container className={styles.content} justify='center'>
                <Grid item className={styles.a}>
                    <Grid container>
                      <Grid item className={styles.number} xs={2} lg={3}>
                        {item.number}
                      </Grid>
                      <Grid item className={styles.section}>
                        {item.section}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <div className={styles.subtitle}>{item.subblurb}</div>
                      <div className={styles.blurb}>{item.blurb}</div>
                    </Grid>

                </Grid>
              </Grid>
            </a>
          </Grid>
        )}
      </Grid>
    </section>
}

Toc.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
}
