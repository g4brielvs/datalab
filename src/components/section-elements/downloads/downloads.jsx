import React from 'react';
import downloadsStyles from "./downloads.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons"

const Downloads = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 end-xs">
        <div className={downloadsStyles.download}>
          <span className={downloadsStyles.fadedModifier}>Updated as of {props.date} / </span>
          <a className={downloadsStyles.data}
             href={props.href}>
            <FontAwesomeIcon icon={faDownload} />
            &nbsp;Download
          </a>
        </div>
      </div>
    </div>
  )
}

export default Downloads;
