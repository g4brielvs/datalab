import React from 'react';
import { Grid } from "@material-ui/core"

import secondaryAnalysesTileStyles from './secondary-tile.module.scss';

const SecondaryTile = (props) => {
  return (
    <>
      <section className={secondaryAnalysesTileStyles.highlight}>
          <a href={props.href}
             className={secondaryAnalysesTileStyles.highlightLink}
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action={"Clicked " + props.heading}>

            <Grid
              container
              spacing={3}>

              <Grid item xs={6} sm={6} md={6} lg={7} xl={8}
                  className={secondaryAnalysesTileStyles.headings}>
                  <p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
                  <p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}
                className={secondaryAnalysesTileStyles.image}>
                  <img className="" src={props.imgSrc} alt=""/>
              </Grid>

              <p className={secondaryAnalysesTileStyles.text}>
                {props.body}
              </p>

            </Grid>
          </a>
      </section>
    </>
  )
}


export default SecondaryTile