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
      bWidth: 1400, // start desktop size
    };
  }

  componentDidMount() {
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
    let isTabletSvg = bWidth <= 768 && bWidth >= 576;
    let isMobileSvg = bWidth <= 576;
    let largestSvg = bWidth >= 769;

    if (isTabletSvg) {
      return(
        <div className={styles.svgContainerTablet}>
          <SectionOneChartTablet/>
          <Legend/>
        </div>
      );
    } else if (isMobileSvg) {
      return(
        <div className={styles.svgContainerMobile}>
          <SectionOneChartMobile/>
          <Legend/>
        </div>
      );
    } else if (largestSvg) {
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
