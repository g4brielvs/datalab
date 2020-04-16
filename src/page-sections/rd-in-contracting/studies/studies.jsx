import React, { useEffect } from 'react';
import './studies.scss';
import * as d3 from 'd3';
import Accordion from "../../../components/accordion/accordion"
import styles from "../../../pages/rd-in-contracting/rd-in-contracting.module.scss"
import GridList from "@material-ui/core/GridList/GridList"
import GridListTile from "@material-ui/core/GridListTile/GridListTile"
import Downloads from "../../../components/section-elements/downloads/downloads"
import ExpressSection from "../../express/express-section"

export default function Studies() {
    this.state = {
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : ''
    }
  }
useEffect(() => {
  window.addEventListener('resize', this.handleResize);
  this.handleResize();
}, []);


  useEffect(() => {
    const categoryViz = d3.select('#category-viz');
    categoryViz.html(chart);

    const svg = categoryViz.select('svg');

    svg.selectAll('.category-icon')
      .attr('tabindex', 0)
      .style('cursor', 'pointer')
      .on('mouseover', onFocus)
      .on('mouseout', onBlur)
      .on('focus', onFocus)
      .on('blur', onBlur);

    svg.attr('role', 'img')
      .attr('aria-labelledby', 'desc')
      .attr('desc', altText);

    function onFocus() {
      d3.select(this)
        .select('circle')
        .attr('fill', '#1302D9')
        .attr('fill-opacity','.12')
        .attr('stroke', '#1302D9');
    }

    function onBlur() {
      d3.select(this)
        .select('circle')
        .attr('fill', 'unset')
        .attr('stroke', '#555555');
    }

  });

  return (<>
      <Accordion title='Instructions'>
        <ul>
          <li>instructions here</li>
        </ul>
      </Accordion>

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
    </>);

}
