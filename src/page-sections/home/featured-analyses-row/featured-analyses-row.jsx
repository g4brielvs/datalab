import React from 'react';
import { Link } from "gatsby"
import "./featured-analyses-row.scss"
import homelessImg from "../../../images/home/homelessness.png"

const FeaturedAnalysesRow = (props) => {
  return (
    <>
      <section className="feature-row">
        <Link to={props.href}
           ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action= {"Clicked " + props.heading} >
            <div className="row feature-row__border">
              <div className="col-xs-12 col-sm-6 col-md-6 feature-row__text">
                <h1 className="feature-row__heading">
                  {props.heading}
                </h1>
                <p className="feature-row__title">
                  {props.title}
                </p>
                <p className="feature-row__blurb">
                  {props.blurb}
                </p>
              </div>
              <div className="feature-row__image col-xs-12 col-sm-6 col-md-6 reset-right">
                <img src={homelessImg} className="reset-right" />
              </div>
          </div>
        </Link>
      </section>
    </>
  )
}


export default FeaturedAnalysesRow

