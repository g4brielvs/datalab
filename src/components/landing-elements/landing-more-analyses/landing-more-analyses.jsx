import React from 'react';
import federal from "../../../images/more-analyses/federal.jpg"
import workers from "../../../images/more-analyses/workers.jpg"
import budget from "../../../images/more-analyses/budget.jpg"
import competition from "../../../images/more-analyses/competition.jpg"
import Featured from "../featured/featured"
import cg from "../../../images/home/cg-gif.gif"

const LandingMoreAnalyses = () => {
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
    <div className="more-analyses container-fluid">
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1 className="more-analyses__heading">
            More Analyses
          </h1>
        </div>
      </div>
      <div>
        <div>
          <div className="row">
            <div className="col-md-12 col-lg-6 last-lg">
              <Featured
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
            <div className="col-md-12 col-lg-6 first-lg">
              <div class="row">
                {analyses.map((item) =>
                <div className="more-analyses__tile col-md-12 col-lg-6">
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
        </div>

      </div>
    </div>
  )
}


export default LandingMoreAnalyses;

