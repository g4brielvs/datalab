import React, { Component } from 'react';
import "./downloads.scss"
import "flexboxgrid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons"

class Downloads extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-lg-10">
            <div className="chart-footer">
              <div>
                <span className='faded'>Updated as of {this.props.date} / </span>
                <a className="download__data"
                   href={this.props.href}>
                  <FontAwesomeIcon icon={faDownload} />
                  &nbsp;Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Downloads;