import React from "react"
import storySectionStyles from './story-section.module.scss'
import StorySectionHeading from "../story-section-heading/story-section-heading"

function StorySection(props) {
  return (
    <>
      <div  className={storySectionStyles.storySection}>
      <section id={`section-${props.header.section}`}>
        <StorySectionHeading
          number={props.header.number}
          title={props.header.subtext}
          teaser={props.header.sectionTeaser}
          blurb={props.header.introBlurb}
        />

        <div className="row center-xs">
          <div className="col-xs-10">
            <div className={storySectionStyles.alignLeft}>
              <div className="row">
                <div className="col-xs-12">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default StorySection
