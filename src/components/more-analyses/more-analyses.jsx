import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '@material-ui/core';

import moreAnalysesStyles from './more-analyses.module.scss';
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
    <section className={moreAnalysesStyles.analyses}>

      <Grid item xs={12}
            className={moreAnalysesStyles.heading}>
        <h2>
          More Analyses
        </h2>
      </Grid>

      <Grid
        container
        className={moreAnalysesStyles.tiles}
        spacing={3}>


        {analyses.map((item, index) =>
          <Grid item xs={12} sm={6} xl={3}
            key={'analyses__tile_' + index}
            className={`tile ${moreAnalysesStyles.tile}`}>

            <Link to={item.href}>

                <div className={moreAnalysesStyles.text}>
                  <h3 className={moreAnalysesStyles.title}>
                    {item.title}
                  </h3>

                  <p className={moreAnalysesStyles.subtitle}>
                    {item.subtitle}
                  </p>
                </div>

                <img src={item.imageSrc} className={moreAnalysesStyles.image} />

            </Link>
          </Grid>
        )}

      </Grid>

    </section>
  )
}


export default MoreAnalyses;

