import React, { Component } from 'react';
import "./header.scss"
import "flexboxgrid"

const Header = (props) => (
  <div className="container">
    <div className="row center-xs">
      <div className="col-xs-10">
        <section className="header--hero">
          <div id="header__banner">
            <p className="header__subtext">
              {props.subtext}
            </p>
            <h3 className="header__subblurb">
              {props.subblurb}
            </h3>
            <p className="header__blurb">
              {props.blurb.map(item => item)}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default Header;
