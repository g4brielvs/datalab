import React from "react";
import storySectionHeadingStyles from "./story-section-heading.module.scss";
import { Grid } from '@material-ui/core';

const StorySectionHeading = (props) => {
  const isMoreBlurb = props.blurbCont;

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
        <Grid container className={storySectionHeadingStyles.introContainer}>
          <Grid item xs={12} xl={5} className='intro'>{props.teaser}</Grid>
          <Grid item xs={12} xl={7}>
            <p className={storySectionHeadingStyles.blurbText}>{props.blurb}</p>
            {isMoreBlurb.map((text) => {
              return(<p className={storySectionHeadingStyles.blurbText} key='text-key'>{text}</p>);
            })}
          </Grid>
        </Grid>
      </section>
    </header>
  );
};

export default StorySectionHeading;
