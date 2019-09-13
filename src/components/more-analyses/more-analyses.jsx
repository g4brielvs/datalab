import React from 'react';
import { Link } from 'gatsby';

import componentStyles from './more-analyses.module.scss';
import federal from "../../images/more-analyses/federal.jpg"
import workers from "../../images/more-analyses/workers.jpg"
import budget from "../../images/more-analyses/budget.jpg"
import competition from "../../images/more-analyses/competition.jpg"

const MoreAnalyses = () => {
  const analyses = [{
    href: 'federal-account-explorer',
    imageSrc: federal,
    title: 'Federal Account Explorer',
    subtitle: 'Discover the federal government\'s spending accounts'
  }, {
    href: 'federal-employees',
    imageSrc: workers,
    title: 'Federal Employees',
    subtitle: 'Who works in government?'
  }, {
    href: 'budget-function',
    imageSrc: budget,
    title: 'Budget Function',
    subtitle: 'Check out how federal spending is categorized'
  }, {
    href: 'competition-in-contracting',
    imageSrc: competition,
    title: 'Competition in Contracting',
    subtitle: 'How often do federal agencies compete for contracts?'
  },
  ]
  return (
    <div className={`container-fluid ${componentStyles.analyses}`}>
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className={componentStyles.analyses__heading}>
            More Analyses
          </h1>
        </div>
      </div>
      <div className={`${componentStyles.analyses__tiles}`}>
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="row">
              {analyses.map((item, index) =>
                <div
                  key={'analyses__tile_' + index}
                  className={`col-lg-3 col-md-6 col-xs-12 ${componentStyles.analyses__tile}`}>
                  <Link to={item.href}>
                    <div className="row">
                      <div className={`col-md-12 first-md col-md-offset-0 col-xs-6 col-xs-offset-2 last-xs ${componentStyles.analyses__tile__text}`}>
                        <h2>
                          {item.title}
                        </h2>
                        <p className={componentStyles.analyses__tile__title}>
                          {item.subtitle}
                        </p>
                      </div>
                      <div className={`col-md-12 col-xs-4 first-xs ${componentStyles.analyses__image__container}`}>
                        <img src={item.imageSrc} className={componentStyles.analyses__image} />
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

