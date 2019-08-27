import React from 'react';
import '../../../styles/index.scss';
import './secondary-analyses-tile.scss';

const SecondaryAnalysesTile = (props) => {
  return (
    <>
      <div className="highlight">
          <a href={props.href}
             className="highlight__link"
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action={"Clicked " + props.heading}>
            <div className="highlight__headings col-md-8 col-sm-6 col-xs-6">
              <p className="h1">
                {props.heading}
              </p>
              <p className="h2">
                {props.subheading}
              </p>
            </div>
            <div className="highlight__image col-md-4 col-sm-6 col-xs-6">
              <img className="" src={props.imgSrc} alt=""/>
            </div>
            <p className="highlight__text">
              {props.body}
            </p>

          </a>
      </div>
    </>
  )
}


export default SecondaryAnalysesTile