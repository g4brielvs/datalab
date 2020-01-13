import styles from './story-heading.module.scss';
import React from 'react';
import { Hidden, Grid } from '@material-ui/core';


// adding to dynamically space between paragraphs for long
// blurbs in story template. (isMoreBlurb)

const StoryHeading = (props) => {
  const isMoreBlurb = props.blurbCont;

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
        {isMoreBlurb &&
         <p className={styles.blurb}>
           {props.blurbCont}
         </p>
        }
      </Grid>
    </Grid>
  );
};

export default StoryHeading;
