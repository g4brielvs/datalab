import React from 'react';
import { Link } from "gatsby"
import "./tertiary-analyses.scss"

const TertiaryAnalyses = (props) => {
  return (
    <>
      <a href="/homelessness-analysis.html"
         ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Homelessness Analysis'"
      >
        <div className="feature-row__border">
          <div className="feature-row__text">
            <h1 className="feature-row__heading">
              Homelessness Analysis
            </h1>
            <p className="feature-row__title">
              Explore federal programs that address homelessness
            </p>
            <p className="feature-row__blurb">
              On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With
              our
              visualizations, you can see which federal programs are addressing homelessness, the amount of federal
              spending on homelessness by region, and where individuals experiencing homelessness are located. We also
              provide information about which regions are similar to others based on their homeless populations and
              funding profiles.
            </p>
          </div>
          <div className="feature-row__image">
            <img src="../images/home/homelessness.png"/>
          </div>
        </div>
      </a>
    </>
  )
}


export default TertiaryAnalyses

