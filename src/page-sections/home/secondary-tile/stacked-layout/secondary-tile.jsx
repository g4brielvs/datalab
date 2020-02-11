import React from 'react';
import { Grid } from '@material-ui/core';

import secondaryAnalysesTileStyles from './secondary-tile.module.scss';

const SecondaryTile = (props) => {
  return (
    <section className={secondaryAnalysesTileStyles.highlight}>
      <a
        href={props.href}
        className={secondaryAnalysesTileStyles.highlightLink}
        ga-on='click' ga-event-category='Data Lab Home Page'
        ga-event-action={'Clicked ' + props.heading}
      >

        <Grid
          container
          spacing={3}
        >

          <Grid item
                className={secondaryAnalysesTileStyles.headings}>
            <p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
            <p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
          </Grid>

          <Grid item xl={12}>
            <img style={{width: '100%'}} src={props.imgSrc} role='presentation' />
          </Grid>

          <Grid item>
          <p className={secondaryAnalysesTileStyles.text}>
            {props.body}
          </p>
          </Grid>
        </Grid>
      </a>
    </section>
  );
}

export default SecondaryTile;
