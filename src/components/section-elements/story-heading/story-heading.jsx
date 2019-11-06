import styles from './story-heading.module.scss';
import React from 'react';
import { Hidden, Grid } from '@material-ui/core';

const StoryHeading = (props) => {
  return (
    <Grid container className={styles.heading}>
      <Grid item xs={12} xl={5}>
        <span className={styles.number}>
          {props.number}
        </span>
        <Hidden only={['sm', 'md', 'xl']}>
          <br />
        </Hidden>
        <span className={styles.title}>
          {props.title}
        </span>
        <div className={styles.teaser}>
          {props.teaser}
        </div>
      </Grid>
      <Grid item xs>
        <p className={styles.blurb}>
          {props.blurb}
        </p>
      </Grid>
    </Grid>
  )
}

export default StoryHeading;
