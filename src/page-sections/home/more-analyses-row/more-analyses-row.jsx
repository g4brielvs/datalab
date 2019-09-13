import React from 'react';
import { Link } from 'gatsby';

import FeaturedAnalysesTile from "../featured-analyses-tile/featured-analyses-tile"

import cg from "../../../images/home/cg-gif.gif"
import federal from "../../../images/more-analyses/federal.jpg"
import workers from "../../../images/more-analyses/workers.jpg"
import budget from "../../../images/more-analyses/budget.jpg"
import competition from "../../../images/more-analyses/competition.jpg"

import componentStyles from "./more-analyses-row.module.scss"


const MoreAnalysesRow = () => {
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
    <section className={componentStyles.analyses__home}>
      <div className="row">
        <h1 className={`col-xs-12 ${componentStyles.analyses__heading}`}>
          More Analyses
        </h1>
      </div>

      <div className="row">
        <div className={`col-md-12 col-lg-6 last-lg ${componentStyles.analyses__featured__tile}`}>
          <FeaturedAnalysesTile
            href={'americas-finance-guide'}
            imgSrc={cg}
            imgAlt={'Answer all your questions about federal government finance'}
            heading={"Your Guide to America's Finances"}
            body={`Your Guide to America's Finances is an overview of federal government finances in 2018, providing
              information on spending, revenue, the deficit, and debt. The Guide, which is created by Treasury's Data
              Lab,
              presents a series of interactive visualizations to allow you to explore these categories and how they
              have
              changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of
              dollars collected and spent by the federal government each year.`}
            mobileBody={`The Guide presents straightforward information about the federal government's spending and revenue, as
                well as the deficit and debt in 2018.`
            } />

        </div>

        <div className={`col-md-12 col-lg-6 first-lg ${componentStyles.analyses__tiles}`}>
          <div className="row">
            {analyses.map((item, index) =>
            <div
              key={'more-analyses__tile_' + index}
              className={index === 0 ? `${componentStyles.analyses__tile} col-sm-12 col-md-6 col-lg-6` : `${componentStyles.analyses__tile} col-sm-12 col-md-6 col-lg-6`}>
              <Link to={item.href}>
                <div className="row">
                  <div className={`col-md-12 col-sm-6 col-xs-6 ${componentStyles.analyses__tile__text}`}>
                    <h2>
                    {item.title}
                    </h2>
                    <p className={componentStyles.analyses__tile__title}>
                    {item.subtitle}
                    </p>
                  </div>
                  <div className={`col-md-12 col-sm-6 col-xs-6 first-sm first-xs  ${componentStyles.analyses__image__container}`}>
                    <img src={item.imageSrc} className={componentStyles.analyses__image} />
                  </div>
                </div>
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


export default MoreAnalysesRow;

