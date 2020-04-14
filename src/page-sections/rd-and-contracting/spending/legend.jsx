import React from 'react';
import Percentage from '../../../svgs/rd-and-contracting/Percentage.svg';
import Devotion from '../../../svgs/rd-and-contracting/Devotion.svg';

import styles from '../spending/legend.module.scss';

export default class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legendWidth: window.innerWidth,
    };
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ legendWidth: window.innerWidth });
  };


  render() {
    let w = this.state.legendWidth;
    let isMobile = w <= 576;

    if (isMobile) {
      return(
        <div className={styles.chartLegend}>
          <p className={styles.legendItem}>R&D Devotion <Devotion/></p>
          <p className={styles.legendItem}>R&D to Total Contract Spending % <Percentage/></p>
        </div>
      );
    } else {
      return(
        <div className={styles.chartLegend}>
          <p className={styles.legendItem}>R&D Devotion <Devotion/></p>
          <p className={styles.legendItem}>Percentage of R&D to Total Contract Spending <Percentage/></p>
        </div>
      );
    };
  };
};
