import React from 'react';
import styles from './rd-in-contracting.module.scss';

import Accordion from '../../components/accordion/accordion';
import Downloads from '../../components/section-elements/downloads/downloads';
import ExpressLayout from '../../components/layouts/express/express';
import ExpressSection from '../../page-sections/express/express-section';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Reset from '../../components/reset/reset';
import SEO from '../../components/seo';

export default class RdInContractingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  render = () =>
    <ExpressLayout
      title='Research & Development in Contracting'
      topic='How much did the federal government invest in Research & Development with FY18 Contract Spending?'
    >
      <SEO title='Federal R&D in Contracting' keywords={['gatsby', 'application', 'react']} />
      <ExpressSection
        title='Amount Spent in FY2018'
        subtitle={<>In Fiscal Year 2018, <span className={styles.subtitleHighlight}>$119 billion were devoted</span> to contracted R&D initiatives.</>}
        description={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>}
        viztitle='R&D as a Part of Total Contract Spending by Agency'
      >
        <Accordion title='Instructions'>
          <ul>
            <li>instructions here</li>
          </ul>
        </Accordion>

        chart

        <Downloads
          href={'/unstructured-data/rd-in-contracting/R&D_Funding_cfo_agency_FY2019_Viz1_2020.03.16.csv'}
          date={'December 2019'}
        />

      </ExpressSection>

      <ExpressSection
        title='Types of R&D in Contracting'
        subtitle={<>What are the types of <span className={styles.subtitleHighlight}>categories that R&D funded?</span></>}
        description={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>}
        viztitle='R&D in Contracting by Category'
      >
        <Accordion title='Instructions'>
          <ul>
            <li>instructions here</li>
          </ul>
        </Accordion>

        chart

        <Downloads
          href={'/unstructured-data/rd-in-contracting/R&D_cfo_agency_20_categories_FY2019_viz2.v2.2020.03.18.csv'}
          date={'December 2019'}
        />

      </ExpressSection>
      <ExpressSection
        title='Non R&D Studies'
        subtitle={<>What types of studies were funded that are <span className={styles.subtitleHighlight}>classified as non-R&D?</span></>}
        description={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>}
        viztitle='Non-R&D Studies and Analyses Spending'
      >
        <Accordion title='Instructions'>
          <ul>
            <li>instructions here</li>
          </ul>
        </Accordion>

        <ControlBar>
          <Reset id='resetBtn' />
        </ControlBar>

        <img src='/images/viz/rd/chart3.svg' className={styles.chart} />
        <GridList className={styles.legend} cols={this.state.windowWidth < 768 ? 2 : 5} cellHeight='auto'>
          <GridListTile className={styles.legendTile}>
            <div className={`${styles.legendBar} ${styles.one}`}></div>
            <div className={styles.legendText}>Total R&D</div>
          </GridListTile>
          <GridListTile className={styles.legendTile}>
            <div className={`${styles.legendBar} ${styles.two}`}></div>
            <div className={styles.legendText}>Development</div>
          </GridListTile>
          <GridListTile className={styles.legendTile}>
            <div className={`${styles.legendBar} ${styles.three}`}></div>
            <div className={styles.legendText}>Basic Research</div>
          </GridListTile>
          <GridListTile className={styles.legendTile}>
            <div className={`${styles.legendBar} ${styles.four}`}></div>
            <div className={styles.legendText}>Applied Research</div>
          </GridListTile>
          <GridListTile className={styles.legendTile}>
            <div className={`${styles.legendBar} ${styles.five}`}></div>
            <div className={styles.legendText}>R&D Plant</div>
          </GridListTile>
        </GridList>

        <Downloads
          href={'/unstructured-data/rd-in-contracting/Viz3_mock_ffs18-dt-tab001.csv'}
          date={'December 2019'}
        />

      </ExpressSection>
    </ExpressLayout>
}
