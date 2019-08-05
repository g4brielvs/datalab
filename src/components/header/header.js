import React, { Component } from 'react';
import "./header.scss"

class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-lg">
          <div className="col-lg-10">
            <section className="header--hero">
              <div id="header__banner">
                <p className="header__subtext">
                  Federal Investment in Higher Education
                </p>
                <h3 className="header__subblurb">
                  Explore the Federal Investment
                  in your <span>Alma Mater</span>
                </h3>
                <p className="header__blurb">
                  Did you know the federal government invested over $149 billion in colleges and universities in fiscal
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
