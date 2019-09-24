import React from 'react';
import { Link } from "gatsby"
import featuredAnalysesStyles from "./feature-row.module.scss"
import homelessImg from "../../../images/home/homelessness.png"
import { Grid } from "@material-ui/core"

const FeatureRow = (props) => {
  return (
    <>
      <section className={featuredAnalysesStyles.featureRow}>
        <Link to={props.href}>
          <Grid
            container
            spacing={3}
            className={featuredAnalysesStyles.border}>

            <Grid items xs={12} sm={6} md={6}
              className={featuredAnalysesStyles.content}>
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

            <Grid items xs={12} sm={6} md={6}
              className={featuredAnalysesStyles.image}>
              <img src={homelessImg} />
            </Grid>

          </Grid>
        </Link>
      </section>
    </>
  )
}


export default FeatureRow

