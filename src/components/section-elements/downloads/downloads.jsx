import React from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types"


const Downloads = (props) => {
  function exportToJsonFile(jsonData) {
    if(typeof Blob === 'undefined'){
      return <></>;
    }

    const dataStr = JSON.stringify(jsonData);
    const dataBlob = new Blob([dataStr], {type:"application/json"});
    const dataUri = URL.createObjectURL(dataBlob);
    const exportFileDefaultName = 'data.json';

    return (
      <a className={downloadsStyles.data}
         href={dataUri}
         download={exportFileDefaultName}>
        <FontAwesomeIcon icon={faDownload} />
        &nbsp;Download
      </a>)
  }

  return (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-end"
      direction="row"
      className={downloadsStyles.download}>
      {props.date ? <span className={downloadsStyles.fadedModifier}>Updated as of {props.date} / </span> : ''}
      {props.isJSON ?
        exportToJsonFile(props.data)
      :
        <a className={downloadsStyles.data}
           href={props.href}>
          <FontAwesomeIcon icon={faDownload} />
          &nbsp;Download
        </a>
      }
    </Grid>
  )
}

Downloads.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.date,
  href: PropTypes.string
}

export default Downloads;
