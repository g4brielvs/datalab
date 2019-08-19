import React from 'react';
import './featured.scss';

const Featured = (props) => {
  return (
    <>
      <div className="featured">
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
      </div>
    </>
  )
}


export default Featured