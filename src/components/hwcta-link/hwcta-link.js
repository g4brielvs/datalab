import React from 'react';
import "./hwcta-link.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import sourceImage from "../../images/sources.svg";

const HWCTALink = (props) => {
  return (
    <div className="container hwcta-entry">
      <div className="row center-xs">
        <div className="col-xs-12">
          <a className="hwcta-entry__link" href={props.url}>
            {/*<div className="hwcta-entry__image col-xs-3"><img src={sourceImage} /></div>*/}
            <span className="hwcta-entry__link-text">Data Sources and Methodologies&nbsp;&nbsp;&nbsp;</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HWCTALink;