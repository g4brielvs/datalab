import React from 'react';

const Highlight = (props) => {
  return (
    <>
      <div id="highlight">
          <a href={props.href}
             className="highlight__link"
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action="Clicked 'Contract Spending Analysis'">
            <div className="highlight__headings">
              <h1>
                {props.heading}
              </h1>
              <h2>
                {props.subheading}
              </h2>
            </div>
            <div className="highlight__image">
              <img className="" src={'#'} />
            </div>
            <p className="highlight__text">
              {props.body}
            </p>

          </a>
      </div>
    </>
  )
}


export default Highlight