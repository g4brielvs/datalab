import "./story-heading.scss"
import React from 'react';

const StoryHeading = (props) => {
  return (
    <div className="heading">
      <div className="heading__number">
        {props.number}
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
  )
}

export default StoryHeading;