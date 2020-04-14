import React from 'react';
import styles from './spendingChart.module.scss';
import SectionOneChartDesktop from '../../../svgs/rd-and-contracting/chart1.svg';
import SectionOneChartTablet from '../../../svgs/rd-and-contracting/chart1-tablet.svg';
import SectionOneChartMobile from '../../../svgs/rd-and-contracting/chart1-mobile.svg';

import Legend from './legend.jsx';

export default class SpendingChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bWidth: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ bWidth: window.innerWidth });
  };
  
  render() {
    let bWidth = this.state.bWidth;
    let isTablet = bWidth <= 768 && bWidth >= 576;
    let isMobile = bWidth <= 576;
    let isDesktop = bWidth >= 769;

    if (isTablet) {
      return(
        <div className={styles.svgContainerTablet}>
          <SectionOneChartTablet/>
          <Legend/>
        </div>
      );
    } else if (isMobile) {
      return(
        <div className={styles.svgContainerMobile}>
          <SectionOneChartMobile/>
          <Legend/>
        </div>
      );
    } else if (isDesktop) {
      return(
        <div className={styles.svgContainerDesktop}>
          <SectionOneChartDesktop/>
          <Legend/>
        </div>
      );
    } else {
      return null;
    }

  };
};
