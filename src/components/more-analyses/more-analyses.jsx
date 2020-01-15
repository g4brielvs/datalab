import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '@material-ui/core';
import moreAnalysesStyles from './more-analyses.module.scss';

import federal from 'src/images/more-analyses/federal.jpg';
import workers from 'src/images/more-analyses/workers.jpg';
import budget from 'src/images/more-analyses/budget.jpg';
import competition from 'src/images/more-analyses/competition.jpg';
import cu from 'src/images/more-analyses/cu.png';
import homeless from 'src/images/more-analyses/homeless.png';
import dts from 'src/images/more-analyses/dts.png';
import explorer from 'src/images/more-analyses/explorer.png';

export default class MoreAnalyses extends React.Component {
  constructor(props) {
    super(props);
  }

  analyses = [{
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
  }, {
    href: 'colleges-and-universities',
    imageSrc: cu,
    title: 'Colleges and Universities',
    subtitle: 'Federal investment in higher education'
  }, {
    href: 'homelessness-analysis',
    imageSrc: homeless,
    title: 'Homelessness Analysis',
    subtitle: 'Explore federal programs that address homelessness'
  }, {
    href: 'dts',
    imageSrc: dts,
    title: 'Visualizing the Daily Treasury Statement',
    subtitle: 'How much does the federal government spend each day?'
  }, {
    href: 'contract-explorer',
    imageSrc: explorer,
    title: 'Contract Explorer',
    subtitle: 'Who receives federal contracts?'
  }];

  show = { // key is current page URL frag, value is array of analyses (above) to show
    'federal-employees': [0, 4, 5, 2],
    'colleges-and-universities': [5, 6, 1, 3],
    'dts': [2, 0, 7, 4],
    'federal-account-explorer': [6, 7, 2, 1],
    'contract-explorer': [3, 0, 2, 6],
    'homelessness-analysis': [1, 4, 3, 7],
    'budget-function': [0, 6, 1, 7],
    'competition-in-contracting': [7, 5, 4, 2]
  };

  render = () =>
    <section className={moreAnalysesStyles.analyses}>
      <Grid item xs={12} className={moreAnalysesStyles.heading}>
        <h2>
          More Analyses
        </h2>
      </Grid>
      <Grid
        container
        className={moreAnalysesStyles.tiles}
        spacing={3}
      >
        {typeof window !== 'undefined' &&
          this.show[window.location.pathname.replace(new RegExp(/\//, 'g'), '')]
            .map((analysesIndex, i) =>
              <Grid item xs={12} sm={6} xl={3}
                key={'analyses_tile_' + i}
                className={`tile ${moreAnalysesStyles.tile}`}
              >
                <Link to={this.analyses[analysesIndex].href}>
                  <div className={moreAnalysesStyles.text}>
                    <h3 className={moreAnalysesStyles.title}>
                      {this.analyses[analysesIndex].title}
                    </h3>
                    <p className={moreAnalysesStyles.subtitle}>
                      {this.analyses[analysesIndex].subtitle}
                    </p>
                  </div>
                  <img src={this.analyses[analysesIndex].imageSrc} className={moreAnalysesStyles.image} />
                </Link>
              </Grid>
            )
        }
      </Grid>
    </section>
}
