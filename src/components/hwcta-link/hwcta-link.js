import React, { Component } from 'react';
import "./hwcta-link.scss"
import "flexboxgrid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class HWCTALink extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10">
            <div className="hwcta-entry">
              <a className="hwcta-entry__link" href="#">
                <span className="hwcta-entry__image"><img src="#"/></span>
                <span className="hwcta-entry__link-text">Data Sources and Methodologies</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HWCTALink;