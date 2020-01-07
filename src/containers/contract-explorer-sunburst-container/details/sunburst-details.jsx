import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import styles from './sunburst-details.module.scss';
import formatNumber from 'src/utils/number-formatter';
import PropTypes from "prop-types";

const SunburstDetails = (props) => {

  return <>
    <Grid
      container
      spacing = {4}>
      <Grid item xs={12}>
        <div className={styles.heading}>{props.details.name}</div>
        <div className={styles.subheading}>Total Contracts</div>
        <div className={styles.totalAmount}>{formatNumber('dollars', props.details.total)}</div>
      </Grid>
      <Grid item xs={12}>
        <div className={styles.subheading}>{props.details.label}</div>
      </Grid>
      {props.details.top5.map((item) => {
        return(
          <Grid item xs={12} sm={12} md={12} lg={6} className={styles.listItem}>
            <div className={styles.text}>{item.name}</div>
            <div className={styles.heading}>{formatNumber('dollars', item.obligation)}</div>
          </Grid>
        )
      })}
    </Grid>
  </>
}

export default SunburstDetails;

SunburstDetails.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  label: PropTypes.string
};