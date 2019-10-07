import './story-heading.scss';
import React from 'react';
import { Hidden, Grid } from '@material-ui/core';

const StoryHeading = (props) => {
  return (
    <Grid container className='heading'>
      <Grid item xs={12} xl={5}>
        <span className='heading__number'>
          {props.number}
        </span>
        <Hidden only={['sm', 'md', 'xl']}>
          <br />
        </Hidden>
        <span className='heading__title'>
          {props.title}
        </span>
        <div className='heading__teaser'>
          {props.teaser}
        </div>
      </Grid>
      <Grid item xs>
        <p className='heading__blurb'>
          {props.blurb}
        </p>
      </Grid>
    </Grid>
  )
}

export default StoryHeading;