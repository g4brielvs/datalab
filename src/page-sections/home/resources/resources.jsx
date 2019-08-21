import React from 'react';
import { Link } from "gatsby"

const Resources = (props) => {
  return (
    <>
      <section className="landing-row landing-row--resources">
        <h1 className="landing-row__heading">
          Resources
        </h1>
        <div className="landing-row__tiles">

          <div className="landing-row__tile landing-row__tile--primary">
            <div className="landing-row__text">
              <p className="landing-row__title">
                Do you want
                <strong> to conduct your own analysis?</strong>
              </p>
              <p className="landing-row__p">
                Access Treasury data and create your own charts and visualizations!
              </p>
            </div>
          </div>

          <a className="landing-row__tile" href="http://api.usaspending.gov/">
            <img src="../images/home/resources-api-2.svg" className="svgImg"/>
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                API Guide
              </h1>
              <p className="landing-row__p landing-row__p--hide">
                Guidance on accessing Treasury data with open source code.
              </p>
            </div>
          </a>

          <a className="landing-row__tile" href="/assets/analyst-guide-1-2.pdf">
            <img src="../images/home/resources-user-guide-2.svg" className="svgImg"/>
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                Analyst Guide
              </h1>
              <p className="landing-row__p landing-row__p--hide">
                Methods to easily navigate data from our sister site, USAspending.gov
              </p>
            </div>
          </a>

          <a className="landing-row__tile landing-row__tile--last" href="/student-innovators-toolbox.html">
            <img src="../images/home/resources-playbook-2.svg" className="svgImg"/>
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                Student Innovators Toolbox
              </h1>
              <p className="landing-row__p landing-row__p--hide">
                Ways for professors and students to get involved.
              </p>
            </div>
          </a>


        </div>


      </section>
    </>
  )
}


export default Resources


