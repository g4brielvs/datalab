import React from 'react';
import { Link } from 'gatsby';

import FeatureTile from "../feature-tile/feature-tile"

import cg from "../../../images/home/cg-gif.gif"
import federal from "../../../images/more-analyses/federal.jpg"
import workers from "../../../images/more-analyses/workers.jpg"
import budget from "../../../images/more-analyses/budget.jpg"
import competition from "../../../images/more-analyses/competition.jpg"

import { Grid } from "@material-ui/core"
import moreAnalysesStyles from './more-analyses-tiles.module.scss'

const MoreAnalysesTiles = () => {
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


      <Grid
        container
        spacing={4}>

          {analyses.map((item, index) =>
            <Grid item sm={12} md={6}
              className={moreAnalysesStyles.tile}>
              <Link to={item.href}
                    key={'more-tile_' + index}>
                <div
                  className={moreAnalysesStyles.tileHeading}>
                    <p className={moreAnalysesStyles.title}>
                    {item.title}
                    </p>
                    <p className={moreAnalysesStyles.subtitle}>
                    {item.subtitle}
                    </p>
                </div>

                <div
                  className={moreAnalysesStyles.imageContainer}>
                    <img src={item.imageSrc} className={moreAnalysesStyles.image} />
                </div>
              </Link>
            </Grid>

          )}

      </Grid>

    </section>
  )
}


export default MoreAnalysesTiles;

