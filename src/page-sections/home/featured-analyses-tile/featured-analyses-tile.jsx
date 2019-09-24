import React from 'react';
import { Link } from "gatsby"

import featuredAnalysesTitleStyles from './featured-analyses-tile.module.scss';

const FeaturedAnalysesTile = (props) => {
  return (
    <>
      <Link to="colleges-and-universities"
            className="primary__link"
            ga-on="click" ga-event-category="Data Lab Home Page"
            ga-event-action={"Clicked " + props.heading}>

          <section className={featuredAnalysesTitleStyles.featured}>
            <h1 className={featuredAnalysesTitleStyles.headingMobile}>
              {props.heading}
            </h1>

            <img className={featuredAnalysesTitleStyles.image} src={props.imgSrc} alt={props.imgAlt} />

            <div className={featuredAnalysesTitleStyles.content}>
              <h2 className={featuredAnalysesTitleStyles.heading}>
                {props.heading}
              </h2>

              <p className={featuredAnalysesTitleStyles.text}>
                {props.body}
              </p>

              <p className={`${featuredAnalysesTitleStyles.text} ${featuredAnalysesTitleStyles.textMobile}`}>
                {props.mobileBody}
              </p>
            </div>
          </section>
      </Link>
    </>
  )
}


export default FeaturedAnalysesTile