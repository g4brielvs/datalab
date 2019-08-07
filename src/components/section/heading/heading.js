import React, { Component } from 'react';
import "./heading.scss"
import "flexboxgrid"

class Heading extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10">
            <div className="heading">
              <div className="heading__number">
                <span>{this.props.number}</span>
              </div>
              <h3 className="heading__title">
                {this.props.title}
              </h3>
              <h1 className="heading__teaser">
                {this.props.teaser}
              </h1>
              <p className="heading__blurb">
                {this.props.blurb}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Heading;