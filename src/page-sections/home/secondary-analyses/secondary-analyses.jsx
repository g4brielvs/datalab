import React from 'react';
import './secondary-analyses.scss';

const SecondaryAnalyses = (props) => {
  return (
    <>
      <div className="highlight">
          <a href={props.href}
             className="highlight__link"
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action="Clicked ${props.heading}">
            <div className="highlight__headings">
              <h1>
                {props.heading}
              </h1>
              <h2>
                {props.subheading}
              </h2>
            </div>
            <div className="highlight__image">
              <img className="" src={props.imgSrc} />
            </div>
            <p className="highlight__text">
              {props.body}
            </p>

          </a>
      </div>
    </>
  )
}


export default SecondaryAnalyses