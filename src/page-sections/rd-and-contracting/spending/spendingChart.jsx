import React from 'react';
import styles from './spendingChart.module.scss';

import SectionOneChartDesktop from '../../../svgs/rd-and-contracting/chart1.svg';
import SectionOneChartTablet from '../../../svgs/rd-and-contracting/chart1-tablet.svg';
import SectionOneChartMobile from '../../../svgs/rd-and-contracting/chart1-mobile.svg';

import SectionOneChartPopupDesktop from '../../../svgs/rd-and-contracting/chart1-desktop-popup.svg';
import SectionOneChartPopupTablet from '../../../svgs/rd-and-contracting/chart1-tablet-popup.svg';
import SectionOneChartPopupMobile from '../../../svgs/rd-and-contracting/chart1-mobile-popup.svg';

import Legend from './legend.jsx';

export default class SpendingChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bWidth: 1400, // start desktop size
      showDetails: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    document.addEventListener('click', this.detailsListener);
    this.detailsClose();
    this.closeDetailResize(); // resize event listener as well
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('resize', this.closeDetailResize);
  }

  closeDetailResize = () => {
    let that = this;
    window.addEventListener('resize', function() {
      that.setState({ showDetails: false });
    });
  };

  handleWindowSizeChange = () => {
    this.setState({ bWidth: window.innerWidth });
  };

  detailsClose = () => {
    let that = this;
    document.getElementById('clear-24px').addEventListener('click', function() {
      that.setState({ showDetails: false });
    });
  };

  /* 
    - Dynamic Event Listener - 
    Use "e.target" and not element directly as some are not drawn
    on the DOM yet. 
  */
  detailsListener = (e) => {
    console.log(e.target);
    let element = e.target;

    if (element.id === 'Show-Details-Text') {
      this.setState({showDetails: !this.state.showDetails});
    };

    /* Little Person Icon */
    if (element.id === 'Detail-Icon') {
      this.setState({showDetails: !this.state.showDetails});
    };

    /* Region bounded by dotted lines */
    if (element.id === 'toggle-region') {
      this.setState({showDetails: !this.state.showDetails});
    };
    
    /* The 'x' on "popup-x.svg" to close! */
    if (element.id === 'x-icon') {
      console.log('x icon');
      this.setState({showDetails: false});
    }
  };

  render() {
    console.log(this.state);
    let bWidth = this.state.bWidth;
    let isTabletSvg = bWidth <= 768 && bWidth >= 576;
    let isMobileSvg = bWidth <= 576;
    let largestSvg = bWidth >= 769;

    const tabletPopupStyle = {
      top: "1275px",
      left: "35%",
    };

    if (isTabletSvg) {
      return(
        <div className={styles.svgContainerTablet}>
          <div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`} style={tabletPopupStyle}>
            <SectionOneChartPopupTablet/>
          </div>
          <SectionOneChartTablet/>
          <Legend/>
        </div>
      );
    } else if (isMobileSvg) {
      return(
        <div className={styles.svgContainerMobile}>
          <div className={`${this.state.showDetails ? styles.svgPopoutShowMobile : styles.svgPopout}`}>
            <SectionOneChartPopupMobile/>
          </div>
          <SectionOneChartMobile/>
          <Legend/>
        </div>
      );
    } else if (largestSvg) {
      return(
        <div className={styles.svgContainerDesktop}>
          <div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`}>
            <SectionOneChartPopupDesktop/>
          </div>
          <SectionOneChartDesktop/>
          <Legend/>
        </div>
      );
    } else {
      return null;
    }

  };
};
