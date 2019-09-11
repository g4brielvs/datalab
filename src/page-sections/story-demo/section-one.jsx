import React from "react"

import Accordion from "../../components/accordion/accordion"
import defaultImage from "../../images/default-image.jpg"

import './section.scss'

const SectionOne = (props) => (
  <>
    <div className="row center-xs">
      <div className="col-xs-10">
        <header>
          <section className='follow-up'>
            <div className='row'>
              <div className='intro col-xs-5'>Title</div>
              <div className='col-xs-7'>Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Intro sentence. Keep to one line if possible.
                Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Intro sentence. Keep to one line if possible.
                Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Intro sentence. Keep to one line if possible.
              </div>
            </div>
          </section>
        </header>
      </div>
    </div>
    <div className="row center-xs">
      <div className="col-xs-10">
        <h1 className="title">Visualization Title</h1>

        <Accordion
          title='Accordion Title'>
          <p>I am an accordion with lots to say.</p>
          <p>I have several paragraphs...</p>
          <a href='https://datalab.usaspending.gov'>...and a link to the Data Lab</a>
        </Accordion>
        <img src={defaultImage} />
      </div>
    </div>
    </>
)

export default SectionOne;



