import React from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Radium from 'radium';
import styles from 'src/styles/variables.scss';

const Downloads = (props) => {

  console.log(props);

  const inlineStyles = {
    ':hover': {
      color: `${styles.legacyBlue}`
    }
  };

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
           style={inlineStyles}
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
  date: PropTypes.string,
  href: PropTypes.string
}

const StyledDownloads = Radium(Downloads);

export default StyledDownloads;


