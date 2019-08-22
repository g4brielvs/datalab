import React from 'react';
import { Link } from "gatsby"
import "./featured-analyses-row.scss"
import homelessImg from "../../../images/home/homelessness.png"

const FeaturedAnalysesRow = (props) => {
  return (
    <>
      <div className="tertiary">
        <Link to="#" href="/homelessness-analysis.html"
           ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Homelessness Analysis'"
        >

              <div className="row tertiary__border">
                <div className="col-xs-6">
                <h1 className="tertiary__heading">
                  Homelessness Analysis
                </h1>
                <p className="tertiary__title">
                  Explore federal programs that address homelessness
                </p>
                <p className="tertiary__blurb">
                  On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With
                  our
                  visualizations, you can see which federal programs are addressing homelessness, the amount of federal
                  spending on homelessness by region, and where individuals experiencing homelessness are located. We also
                  provide information about which regions are similar to others based on their homeless populations and
                  funding profiles.
                </p>
              </div>
              <div className="tertiary__image col-xs-6">
                <img src={homelessImg} />
              </div>
          </div>
        </Link>
      </div>
    </>
  )
}


export default FeaturedAnalysesRow

