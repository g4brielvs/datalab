import React from 'react';
import "./story-heading.scss"

const StoryHeading = (props) => {
  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="heading">
            <div className="heading__number">
              <span>{props.number}</span>
            </div>
            <h3 className="heading__title">
              {props.title}
            </h3>
            <h1 className="heading__teaser">
              {props.teaser}
            </h1>
            <p className="heading__blurb">
              {props.blurb}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryHeading;