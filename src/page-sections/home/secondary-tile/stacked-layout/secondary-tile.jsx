import React from 'react';
import { Grid, Hidden } from "@material-ui/core"

import secondaryAnalysesTileStyles from './secondary-tile.module.scss';
import PropTypes from "prop-types"
import Sunburst from "../../../../components/visualizations/sunburst-vega/sunburst-vega"

const SecondaryTile = (props) => {
  return (
    <section className={secondaryAnalysesTileStyles.highlight}>
      <a
        href={props.href}
        className={secondaryAnalysesTileStyles.highlightLink}
        ga-on='click' ga-event-category='Data Lab Home Page'
        ga-event-action={'Clicked ' + props.heading}>

        <Hidden lgDown>
          <Grid
            container
            spacing={3}>
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
        </Hidden>
        <Hidden xlUp>
          <Grid
            container
            spacing={3}>
            <Grid item lg={6}>
              <img style={{width: '100%'}} src={props.imgSrc} role='presentation' />
            </Grid>
            <Grid item lg={6}
                  className={secondaryAnalysesTileStyles.headings}>
              <p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
              <p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
              <p className={secondaryAnalysesTileStyles.text}>
                {props.body}
              </p>
            </Grid>
          </Grid>
        </Hidden>
      </a>
    </section>
  );
}

export default SecondaryTile;

SecondaryTile.propTypes = {
  href: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
