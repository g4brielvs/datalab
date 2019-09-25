import React from 'react';
import { Link } from "gatsby"
import featuredAnalysesStyles from "./feature-row.module.scss"
import homelessImg from "../../../images/home/homelessness.png"
import { Grid } from "@material-ui/core"

const FeatureRow = (props) => {
  return (
    <>
      <Link to={props.href}>
        <Grid
            container
            className={featuredAnalysesStyles.border}>

            <Grid items xs={12} sm={6}
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

            <Grid items xs={12} sm={6}
              className={featuredAnalysesStyles.image}>
              <img src={homelessImg} />
            </Grid>

        </Grid>
      </Link>

    </>
  )
}


export default FeatureRow

