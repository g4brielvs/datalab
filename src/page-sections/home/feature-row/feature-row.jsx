import React from 'react';
import { Link } from 'gatsby';
import featuredAnalysesStyles from './feature-row.module.scss';
import homelessImg from '../../../images/home/homelessness.png';
import { Grid } from '@material-ui/core';

const FeatureRow = (props) => {
  return (
    <Link to={props.href}>
      <Grid
        container
        spacing={3}
        className={featuredAnalysesStyles.container}
      >

        <Grid item sm={12} md={6}
          className={featuredAnalysesStyles.content}
        >
          <h1 className={featuredAnalysesStyles.heading}>
            {props.heading}
          </h1>
          <p className={featuredAnalysesStyles.title}>
            {props.title}
          </p>
          <p className={featuredAnalysesStyles.blurb}>
            {props.blurb}
          </p>
        </Grid>

        <Grid item sm={12} md={6}
          className={featuredAnalysesStyles.image}
        >
          <img src={homelessImg} role='presentation' />
        </Grid>
      </Grid>
    </Link>
  );
}

export default FeatureRow;
