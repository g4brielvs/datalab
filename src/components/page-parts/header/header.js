import React, { Component } from 'react';
import "./header.scss"
import "flexboxgrid"

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-lg-10">
            <section className="header--hero">
              <div id="header__banner">
                <p className="header__subtext">
                  {this.props.subtext}
                </p>
                <h3 className="header__subblurb">
                  {this.props.subblurb}
                </h3>
                <p className="header__blurb">
                  {this.props.blurb}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
