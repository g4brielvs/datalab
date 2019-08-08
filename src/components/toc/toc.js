import React, { Component } from 'react';
import "./toc.scss"

class Toc extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-lg">
          <div className="col-lg-10">
            <section id="TOC">
              <div className="row">
                {
                  this.props.sections.map((item, key) =>
                    <div key={key} className="toc__tile col-lg-3 col-md-6 col-xs-12">
                      <a href={`#section-${item.section}`}>
                        <div className="toc--number">
                          <h2>
                            {item.number}
                          </h2>
                        </div>
                        <h4 className="toc--subtext">
                          {item.subtext}
                        </h4>
                        <h3 className="toc--subblurb">
                          {item.subblurb}
                        </h3>

                        <p className="toc--blurb">
                          {item.blurb}
                        </p>
                      </a>
                    </div>
                  )
                }
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Toc;