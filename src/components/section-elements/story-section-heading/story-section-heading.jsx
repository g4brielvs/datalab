import React from 'react';
import storySectionHeadingStyles from './story-section-heading.module.scss';
import './story-section-heading.scss';
import { Grid } from '@material-ui/core';

const StorySectionHeading = (props) => {
  return (
    <header>
      <section className={storySectionHeadingStyles.header}>
        <Grid container>
          <Grid item xs={2} sm={12} xl={1} className={storySectionHeadingStyles.headerNumber}>
            <h2>{props.number}</h2>
          </Grid>
          <Grid item xs={10} sm={12} xl={11} className={storySectionHeadingStyles.headerTitle}>
            {props.title}
          </Grid>
        </Grid>
        <Grid container spacing={10} className={storySectionHeadingStyles.introContainer}>
          <Grid item xs={12} xl={5} className={storySectionHeadingStyles.intro}>{props.teaser}</Grid>
          <Grid item xs={12} xl={7}>{props.blurb}</Grid>
        </Grid>
      </section>
    </header>
  );
};

export default StorySectionHeading;
