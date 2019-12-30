import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import styles from './sunburst-details.module.scss';

const SunburstDetails = (props) => {

  return <>
    <Grid
      container
      spacing = {4}>
      <Grid item xs={12}>
        <div className={styles.heading}>{props.details.name}</div>
        <div className={styles.subheading}>Total Contracts</div>
        <div className={styles.totalAmount}>{props.details.total}</div>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.subheading}>{props.details.label}</div>
      </Grid>
      {props.details.top5.map((item) => {
        return(
          <Grid item xs={6}>
            <div className={styles.text}>{item.name}</div>
            <div className={styles.heading}>{item.obligation}</div>
          </Grid>
        )
      })}
    </Grid>
  </>
}

export default SunburstDetails