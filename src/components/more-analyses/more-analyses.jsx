import React from 'react';
import { Link } from 'gatsby';

import './more-analyses.scss';
import federal from "../../images/more-analyses/federal.jpg"
import workers from "../../images/more-analyses/workers.jpg"
import budget from "../../images/more-analyses/budget.jpg"
import competition from "../../images/more-analyses/competition.jpg"

const MoreAnalyses = () => {
  const analyses = [{
    href: '#',
    imageSrc: federal,
    title: 'Federal Account Explorer',
    subtitle: 'Discover the federal government\'s spending accounts'
  }, {
    href: '#',
    imageSrc: workers,
    title: 'Federal Employees',
    subtitle: 'Who works in government?'
  }, {
    href: '#',
    imageSrc: budget,
    title: 'Budget Function',
    subtitle: 'Check out how federal spending is categorized'
  }, {
    href: '#',
    imageSrc: competition,
    title: 'Competition in Contracting',
    subtitle: 'How often do federal agencies compete for contracts?'
  },
  ]
  return (
    <div className="more-analyses container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className="more-analyses__heading">
            More Analyses
          </h1>
        </div>
      </div>
      <div className="more-analyses__tiles">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div class="row">
              {analyses.map((item) =>
                <div className="more-analyses__tile col-lg-3 col-md-6 col-xs-12">
                  <Link to={item.href}>
                    <div className="row">
                      <div className="more-analyses__tile-text col-md-12 first-md col-md-offset-0 col-xs-6 col-xs-offset-2 last-xs">
                        <h2>
                          {item.title}
                        </h2>
                        <p className="more-analyses__tile-title">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="more-analyses__image-container col-md-12 col-xs-4 first-xs">
                        <img src={item.imageSrc} className="more-analyses__image"/>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MoreAnalyses;

