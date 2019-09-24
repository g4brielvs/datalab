import React from 'react';
import hwctaLinkStyles from "./hwcta-link.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import sourceImage from "../../images/sources.svg";

const HWCTALink = (props) => {
  return (
    <div className={hwctaLinkStyles.entry}>
      <a className={hwctaLinkStyles.link} href={props.url}>
        <div className="row">
          <div className={`${hwctaLinkStyles.image} col-xs-offset-1 col-xs-2 col-md-1`}><img src={sourceImage} /></div>
          <span className={`${hwctaLinkStyles.linkText} col-xs-10`}>
            &nbsp;&nbsp;&nbsp;Data Sources and Methodologies&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} />
          </span>

        </div>
      </a>
    </div>
  )
}

export default HWCTALink;