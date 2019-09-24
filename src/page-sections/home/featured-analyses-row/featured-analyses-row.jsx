import React from 'react';
import { Link } from "gatsby"
import featuredAnalysesStyles from "./featured-analyses-row.module.scss"
import homelessImg from "../../../images/home/homelessness.png"

const FeaturedAnalysesRow = (props) => {
  return (
    <>
      <section className={featuredAnalysesStyles.featureRow}>
        <Link to={props.href}
           ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action= {"Clicked " + props.heading} >
            <div className={`row ${featuredAnalysesStyles.border}`}>
              <div className={`col-xs-12 col-sm-6 col-md-6 ${featuredAnalysesStyles.content}`}>
                <h1 className={featuredAnalysesStyles.heading}>
                  {props.heading}
                </h1>
                <p className={featuredAnalysesStyles.title}>
                  {props.title}
                </p>
                <p className={featuredAnalysesStyles.blurb}>
                  {props.blurb}
                </p>
              </div>
              <div className={`${featuredAnalysesStyles.image} col-xs-12 col-sm-6 col-md-6`}>
                <img src={homelessImg} />
              </div>
          </div>
        </Link>
      </section>
    </>
  )
}


export default FeaturedAnalysesRow

