import React from 'react';
import "./header.scss"


const Header = (props) => (
  <div className="header container-fluid">
    <div className="row center-xs">
      <div className="col-xs-10">
        <section className="header--hero">
          <div id="header__banner">
            <p className="header__subtext">
              {props.subtext}
            </p>
            <p className="header__subblurb">
              {props.subblurb}
            </p>
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
