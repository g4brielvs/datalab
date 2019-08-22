import React from 'react';
import apiImg from '../../../images/home/resources-api-2.svg'
import userGuideImg from '../../../images/home/resources-user-guide-2.svg'
import playbookImg from '../../../images/home/resources-playbook-2.svg'
import './resources.scss'

const Resources = () => {

  const resourcesItems = [{
    href: 'http://api.usaspending.gov/',
    imageSrc: apiImg,
    title: 'API Guide',
    description: 'Guidance on accessing Treasury data with open source code.'
    }, {
      href: '/assets/analyst-guide-1-2.pdf',
      imageSrc: userGuideImg,
      title: 'Analyst Guide',
      description: 'Methods to easily navigate data from our sister site, USAspending.gov'
    }, {
      href: '#',
      imageSrc: playbookImg,
      title: 'Student Innovators Toolbox',
      description: 'Ways for professors and students to get involved.'
    },
  ]

  return (
    <>
      <div className="landing-row--resources">
        <div className="row">
          <div class="col-xs-12">
            <h1 className="landing-row__heading">
              Resources
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="landing-row__tile col-xs-3">
            <p className="landing-row__title">
              Do you want
              <strong> to conduct your own analysis?</strong>
            </p>
            <p className="landing-row__p">
              Access Treasury data and create your own charts and visualizations!
            </p>
          </div>
          {/*// add conditional here */}
          {/*//if last add class*/}
          {resourcesItems.map((resource) =>
            <a className="landing-row__tile col-xs-3 center-xs"
              href={resource.href}>
              <img src={resource.imageSrc} className="svgImg"/>
              <h1 className="landing-row__title">
                {resource.title}
              </h1>
              <p className="landing-row__p">
                {resource.description}
              </p>
            </a>
          )}
        </div>
      </div>
    </>
  )
}


export default Resources


