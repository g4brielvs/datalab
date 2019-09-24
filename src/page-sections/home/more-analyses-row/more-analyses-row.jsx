import React from 'react';
import { Link } from 'gatsby';

import MainTile from "../main-tile/main-tile"

import cg from "../../../images/home/cg-gif.gif"
import federal from "../../../images/more-analyses/federal.jpg"
import workers from "../../../images/more-analyses/workers.jpg"
import budget from "../../../images/more-analyses/budget.jpg"
import competition from "../../../images/more-analyses/competition.jpg"

import { Grid } from "@material-ui/core"
import moreAnalysesStyles from './more-analyses-row.module.scss'

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
    <section className={moreAnalysesStyles.moreAnalyses}>
      <h1 className={moreAnalysesStyles.heading}>
        More Analyses
      </h1>

      <Grid
        container
        spacing={2}>
        <Grid item md={12} lg={6}>
            <MainTile
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

        </Grid>

        <Grid item md={12} lg={6}>
          <Grid
            container
            spacing={2}>
              {analyses.map((item, index) =>
                <Grid item sm={6} md={3} lg={6}>
                  <Link to={item.href}
                        key={'more-tile_' + index}
                        className={index === 0 ? `${moreAnalysesStyles.tile}` : `${moreAnalysesStyles.tile}`}>
                    <div className={moreAnalysesStyles.tileHeading}>
                        <p className={moreAnalysesStyles.title}>
                        {item.title}
                        </p>
                        <p className={moreAnalysesStyles.subtitle}>
                        {item.subtitle}
                        </p>
                    </div>

                    <div className={moreAnalysesStyles.imageContainer}>
                        <img src={item.imageSrc} className={moreAnalysesStyles.image} />
                    </div>
                  </Link>
                </Grid>
              )}
          </Grid>
        </Grid>
      </Grid>

    </section>
  )
}


export default MoreAnalysesRow;

