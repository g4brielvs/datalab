import React from 'react';
import federal from "../../images/more-analyses/federal.jpg"
import workers from "../../images/more-analyses/workers.jpg"
import budget from "../../images/more-analyses/budget.jpg"
import competition from "../../images/more-analyses/competition.jpg"

const MoreAnalyses = () => {
  const analyses = [{
    fileName: '#',
    imageSrc: federal,
    title: 'Federal Account Explorer',
    subtitle: 'Discover the federal government\'s spending accounts'
  }, {
    fileName: '#',
    imageSrc: workers,
    title: 'Federal Employees',
    subtitle: 'Who works in government?'
  }, {
    fileName: '#',
    imageSrc: budget,
    title: 'Budget Function',
    subtitle: 'Check out how federal spending is categorized'
  }, {
    fileName: '#',
    imageSrc: competition,
    title: 'Competition in Contracting',
    subtitle: 'How often do federal agencies compete for contracts?'
  },
  ]
  return (
    <div className="more-analyses container">
      <div className="row">
        <h1 className="more-analyses-heading">
          More Analyses
        </h1>
      </div>
      <div className="more-analyses__tiles">
        <div className="row">
          {analyses.map((item) =>
            <div className="more-analyses__tile col-lg-3 col-md-6 col-xs-12">
              <a href="federal-account-explorer.html">
                <div className="more-analyses__tile-text">
                  <h2>
                    {item.title}
                  </h2>
                  <p className="more-analyses__tile-title">
                    {item.subtitle}
                  </p>
                </div>
                <div className="more-analyses__image-container">
                  <img src={item.imageSrc} className="more-analyses__image"/>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default MoreAnalyses;

