import React from 'react';
import { Link } from "gatsby"

import './featured-analyses-tile.scss';

const FeaturedAnalysesTile = (props) => {
  return (
    <>
      <Link to="colleges-and-universities"
            className="primary__link"
            ga-on="click" ga-event-category="Data Lab Home Page"
            ga-event-action={"Clicked " + props.heading}>

          <section className="featured">
            <h1 className="featured__heading--mobile">
              {props.heading}
            </h1>

            <img className="featured__image" src={props.imgSrc} alt={props.imgAlt} />

            <div className="featured__content">
              <h2 className="featured__heading">
                {props.heading}
              </h2>

              <p className="featured__text">
                {props.body}
              </p>

              <p className="featured__text featured__text--mobile">
                {props.mobileBody}
              </p>
            </div>
          </section>
      </Link>
    </>
  )
}


export default FeaturedAnalysesTile