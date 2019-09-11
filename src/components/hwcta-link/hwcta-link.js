import React from 'react';
import "./hwcta-link.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import sourceImage from "../../images/sources.svg";

const HWCTALink = (props) => {
  return (
    <div className="hwcta-entry">
      <a className="hwcta-entry__link" href={props.url}>
        <div className="row">
          <div className="hwcta-entry__image col-xs-offset-1 col-xs-1"><img src={sourceImage} /></div>
          <span className="hwcta-entry__link-text col-xs-8">
            &nbsp;&nbsp;&nbsp;Data Sources and Methodologies&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} />
          </span>

        </div>
      </a>
    </div>
  )
}

export default HWCTALink;