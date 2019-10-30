import React from "react"
import storySectionHeadingStyles from "./story-section-heading.module.scss"
import { Grid } from '@material-ui/core';

const StorySectionHeading = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={10}>
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
            <Grid container className={storySectionHeadingStyles.introContainer}>
              <Grid item xs={12} xl={5} className='intro'>{props.teaser}</Grid>
              <Grid item xs={12} xl={7}>
                {props.blurb}
              </Grid>
            </Grid>
          </section>
        </header>
      </Grid>
    </Grid>
  )
}

export default StorySectionHeading
