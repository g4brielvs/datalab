import React from "react"
import storySectionHeadingStyles from "./story-section-heading.module.scss"

const StorySectionHeading = (props) => {
  return (
    <div className="row center-xs">
      <div className="col-xs-10">
        <header>
          <section className={storySectionHeadingStyles.header}>
            <div className='row'>
              <div className={storySectionHeadingStyles.headerNumber + ' col-xs-1'}>
                <h2>{props.number}</h2>
              </div>
              <div className={'col-xs-9 ' + storySectionHeadingStyles.headerTitle}>
                {props.title}
              </div>
            </div>
            <div className={'row ' + storySectionHeadingStyles.introContainer}>
              <div className='intro col-xs-5'>{props.teaser}</div>
              <div className='col-xs-7'>{props.blurb}
              </div>
            </div>
          </section>
        </header>
      </div>
    </div>
  )
}

export default StorySectionHeading
