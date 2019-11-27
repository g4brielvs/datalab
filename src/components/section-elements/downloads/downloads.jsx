import React from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";


const Downloads = (props) => {
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-end"
      direction="row"
      className={downloadsStyles.download}>
        {props.date ? <span className={downloadsStyles.fadedModifier}>Updated as of {props.date} / </span> : ''}
        <a className={downloadsStyles.data}
           href={props.href}>
          <FontAwesomeIcon icon={faDownload} />
          &nbsp;Download
        </a>
    </Grid>
  )
}

export default Downloads;
