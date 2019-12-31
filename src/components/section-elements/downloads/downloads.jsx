import React from 'react';
import downloadsStyles from "./downloads.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";


const Downloads = (props) => {
  function exportToJsonFile(jsonData) {
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

  // Leaving this in just in case we MUST export to a csv file (will talk with Yaw and Andrea when they return), my only reason against JSON to CSV is we lose precision at >15 decimal places.
  function exportJSONToCsvFile(jsonData) {
    function parseJSONToCSVStr(jsonData) {
      if(jsonData.length === 0) {
        return '';
      }

      let keys = Object.keys(jsonData[0]);

      let columnDelimiter = ',';
      let lineDelimiter = '\n';

      let csvColumnHeader = keys.join(columnDelimiter);
      let csvStr = csvColumnHeader + lineDelimiter;

      jsonData.forEach(item => {
        keys.forEach((key, index) => {
          if( (index > 0) && (index < keys.length) ) {
            csvStr += columnDelimiter;
          }
          csvStr += item[key];
        });
        csvStr += lineDelimiter;
      });

      return csvStr;
    }

    const csvStr = parseJSONToCSVStr(jsonData);
    const dataBlob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
    const dataUri = URL.createObjectURL(dataBlob);
    const exportFileDefaultName = 'data.csv';

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

export default Downloads;
