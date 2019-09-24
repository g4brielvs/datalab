import React from 'react';
import '../../../styles/index.scss';
import secondaryAnalysesTileStyles from './secondary-analyses-tile.module.scss';

const SecondaryAnalysesTile = (props) => {
  return (
    <>
      <div className={secondaryAnalysesTileStyles.highlight}>
          <a href={props.href}
             className="highlight__link"
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action={"Clicked " + props.heading}>
            <div className={`${secondaryAnalysesTileStyles.highlightHeadings} col-md-8 col-sm-6 col-xs-6`}>
              <p className={secondaryAnalysesTileStyles.h1}>
                {props.heading}
              </p>
              <p className={secondaryAnalysesTileStyles.h2}>
                {props.subheading}
              </p>
            </div>
            <div className={`${secondaryAnalysesTileStyles.highlightImage} col-md-4 col-sm-6 col-xs-6`}>
              <img className="" src={props.imgSrc} alt=""/>
            </div>
            <p className={secondaryAnalysesTileStyles.highlightText}>
              {props.body}
            </p>

          </a>
      </div>
    </>
  )
}


export default SecondaryAnalysesTile