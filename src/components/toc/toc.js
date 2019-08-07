import React, { Component } from 'react';
import "./toc.scss"

class Toc extends Component {

  render() {
    return (
      <div className="container">
        <div class="row center-lg">
          <div class="col-lg-10">
            <section id="TOC">
              <div class="row">
                <div class="toc__tile col-lg-3 col-md-6 col-xs-12">
                  <a href="#section-one">
                    <div class="toc--number">
                      <h2>
                        01
                      </h2>
                    </div>
                    <h4 class="toc--subtext">
                      Investment Overview
                    </h4>
                    <h3 class="toc--subblurb">
                      WHAT IS A FEDERAL INVESTMENT?
                    </h3>

                    <p class="toc--blurb">
                      Learn more about the three categories of federal investments: student aid, grants, and contracts.
                    </p>
                  </a>
                </div>

                <div class="toc__tile col-lg-3 col-md-6 col-xs-12">
                  <a href="#section-two">
                    <div class="toc--number">
                      <h2>
                        02
                      </h2>
                    </div>
                    <h4 class="toc--subtext">
                      My Alma Mater
                    </h4>

                    <h3 class="toc--subblurb">
                      How much did my school receive?
                    </h3>
                    <p class="toc--blurb">
                      Search for your school and discover details about federal funding at your alma mater.
                    </p>
                  </a>
                </div>

                <div class="toc__tile col-lg-3 col-md-6 col-xs-12">
                  <a href="#section-three">
                    <div class="toc--number">
                      <h2>
                        03
                      </h2>
                    </div>
                    <h4 class="toc--subtext">
                      Agency Investment
                    </h4>
                    <h3 class="toc--subblurb">
                      Which federal agencies are involved?
                    </h3>
                    <p class="toc--blurb">
                      Find out which federal agencies provide investments and in what amounts.
                    </p>
                  </a>
                </div>

                <div class="toc__tile col-lg-3 col-md-6 col-xs-12">
                  <a href="#section-four">
                    <div class="toc--number">
                      <h2>
                        04
                      </h2>
                    </div>
                    <h4 class="toc--subtext">
                      Investment Categories
                    </h4>
                    <h3 class="toc--subblurb">
                      What are the investments used for?
                    </h3>
                    <p class="toc--blurb">
                      Discover more about what is funded by federal investment.
                    </p>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Toc;