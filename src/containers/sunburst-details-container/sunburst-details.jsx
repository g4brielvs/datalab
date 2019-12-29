import React from "react";
import Grid from "@material-ui/core/Grid/Grid";

const SunburstDetails = (props) => {

  return <>
    <Grid
      container
      spacing = {4}>
      <Grid item xs={12}>
        <div>{props.details.name}</div>
        <div>Total Contracts</div>
        <div>{props.details.total}</div>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <div>{props.details.label}</div>
      </Grid>
      {props.details.top5.map((item) => {
        return(
          <Grid item xs={6}>
            <div>{item.name}</div>
            <div>{item.obligation}</div>
          </Grid>
        )
      })}
    </Grid>
  </>
}

export default SunburstDetails