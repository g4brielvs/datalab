import React, { useState, useEffect } from 'react'

import { Grid, Hidden } from '@material-ui/core';

import Downloads from "src/components/section-elements/downloads/downloads"
import flareData from '../../../static/unstructured-data/contract-explorer/flare.json';
import awardsData from '../../../static/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv';
import SunburstDetails from './details/sunburst-details';
import Sunburst from 'src/components/visualizations/sunburst-vega/sunburst-vega';
import BreadCrumbs from "src/components/breadcrumbs/breadcrumbs";
import styles from './contract-explorer-container.module.scss';
import Search from 'src/components/chartpanels/search';
const sunData = flareData;

const SunburstVegaContainer = () => {

  // create arrays of unique agencies, subagencies and recipients with ID for search list
  const agencies = [];
  const subagencies = [];
  const recipients = [];

  awardsData.map((e, i) => {

    if (agencies.findIndex(a => a.display === e.agency) === -1) {
      agencies.push({
        id: `a${i}`,
        display: e.agency
      });
    }

    if (subagencies.findIndex(s => s.display === e.subagency) === -1) {
      subagencies.push({
        id: `s${i}`,
        display: e.subagency
      });
    }

    if (recipients.findIndex(r => r.display === e.recipient) === -1) {
      recipients.push({
        id: `r${i}`,
        display: e.recipient
      });
    }
  });
  const searchList = agencies.concat(subagencies).concat(recipients);

  // try to force redraw of sunburst (or entire container); NOT WORKING
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({ 'thing': 'one' }), ['thing', 'two']);

  const searchSelect = (id) => {
    sunData.tree = flareData.tree.slice(0, 50);  // filter data in chart (future: to selected); WORKS, BUT DOESN'T REDRAW
    // forceUpdate();
  }

  useEffect(() => {
    getDetails();
  }, []);

  const detailDefaults = {
    label: null,
    total: null,
    top5: [],
    name: null
  }

  const colors = ['#7A2149', '#61344A', '#4E4861', '#3F566E', '#3C596A', '#2F6567', '#38705F', '#517852', '#88923D',
    '#AE933D', '#D39248', '#EA8052'];

  const [arc, setSelectedArc] = useState(null);
  const [previousArc, setPreviousArc] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const [details, setDetails] = useState(detailDefaults);

  const sunburstRef = React.createRef();

  function getTop5(items, type) {
    // get all unique values of the item type
    let unique = [...new Set(items.map(item => item[type]))];
    let summedItems = [];

    for (let i = 0; i < unique.length; i++) {
      summedItems.push({
        name: unique[i],
        type: type,
        obligation: items.filter(node => node[type] === unique[i]).reduce((a, b) => a + (b.obligation || 0), 0)
      });
    }
    return summedItems.sort((a, b) => (a.obligation < b.obligation) ? 1 : -1).slice(0, 5);
  }

  function createBreadcrumbTrail(selectedArc) {
    if (!selectedArc) { return; };

    const breadcrumbs = [];
    const agency = sunData.tree.filter(node => node.name === selectedArc.agency);

    switch(selectedArc.depth) {
      case 0:
        return;
        break;
      case 1:
        breadcrumbs.push(agency[0]);
        break;
      case 2:
        breadcrumbs.push(agency[0]);
        breadcrumbs.push(selectedArc);
        break;
      case 3:
        const subagency = sunData.tree.filter(node => node.id === selectedArc.parent);
        breadcrumbs.push(agency[0]);
        breadcrumbs.push(subagency[0]);
        breadcrumbs.push(selectedArc)
        break;
    }

    const trail = [{
      name: null,
      depth: 0
    }];

    breadcrumbs.forEach((item) => {
      trail.push({
        name: item.name,  // abbreviation
        depth: item.depth,
        id: item.id,
        arc: selectedArc
      });
    });

    return trail;
  }

  function selectBreadcrumb (d) {
    const selectedArc = sunData.tree.filter(node => node.depth === d.depth && node.name === d.name);
    // setSelectedArc(selectedArc);
    if (selectedArc && selectedArc.length > 0 && sunburstRef && sunburstRef.current) {
      sunburstRef.current.updateViz(selectedArc[0]);
    }
  }

  const breadcrumbRef = React.createRef();

  function updateBreadcrumbs (selectedArc) {
    const trail = createBreadcrumbTrail(selectedArc);
    if (breadcrumbRef && breadcrumbRef.current) {
      breadcrumbRef.current.updateBreadcrumbs(selectedArc.colorHex, trail);
    }
    setBreadcrumbs(trail);
  }

  function getDetails (selectedArc) {
    const depth = selectedArc && selectedArc.depth ? selectedArc.depth : 0;

    const details = {
      label: null,
      total: null,
      top5: [],
      name: null
    };

    switch (depth) {
      case 0:
        details.label = 'Agencies';
        details.total = awardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData, 'agency');
        details.name = 'Contract Spending In Fiscal Year 2019';
        break;
      case 1:
        details.label = 'Subagencies';
        details.total = awardsData.filter(node => node.agency === selectedArc.agency).reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData.filter(node => node.agency === selectedArc.agency), 'subagency');
        details.name = selectedArc.name;
        break;
      case 2:
        details.label = 'Contractors';
        details.total = awardsData.filter(node => node.agency === selectedArc.agency && node.subagency === selectedArc.name).reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData.filter(node => node.agency === selectedArc.agency && node.subagency === selectedArc.name), 'recipient');
        details.name = selectedArc.name;
        break;
      case 3:
        details.total = awardsData.filter(node => node.agency === selectedArc.agency && node.subagency === subagency[0].name && node.recipient === selectedArc.name).reduce((a, b) => a + (b.obligation || 0), 0);
        details.name = selectedArc.name;
        break;
    }

    setDetails(details);

  }

  // Upon arc selection, sunburst sends the arc info to the container
  // Use arc to the arc color, selected arc, update breadcrumbs and get details
  function getSelectedArc(selectedArc) {
    const tempPreviousArc = arc;
    updateBreadcrumbs(selectedArc);
    getDetails(selectedArc);
    setPreviousArc(tempPreviousArc);
    setSelectedArc(selectedArc);
  }

  return <>
    <Hidden smDown>
      <Grid container spacing={4} className={styles.sectionContainer}>
        <Grid item md={6}>
          <Search
            searchList={searchList}
            listDescription='Search List of Contracts and Agencies'
            onSelect={searchSelect}
          />
          <div className={styles.sunburstDetails}>
            <SunburstDetails details={details} />
          </div>
        </Grid>
        <Grid item md={6}>
          <BreadCrumbs className={`${styles.header} ${styles.breadcrumbsContainer}`} items={breadcrumbs} onSelect={selectBreadcrumb} ref={breadcrumbRef} />
          <Sunburst data={sunData} getSelectedArc={getSelectedArc} colors={colors} ref={sunburstRef} />
          <div className={styles.sunburstMessage}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
          <Downloads className={styles.downloadContainer}
            href={'/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv'} />
        </Grid>
      </Grid>
    </Hidden>
    <Hidden mdUp>
      <Search
        searchList={searchList}
        listDescription='Search List of Contracts and Agencies'
        onSelect={searchSelect}
      />
      <BreadCrumbs className={`${styles.header} ${styles.breadcrumbsContainer}`} items={breadcrumbs} onSelect={selectBreadcrumb} ref={breadcrumbRef} />
      <Sunburst data={sunData} getSelectedArc={getSelectedArc} colors={colors} ref={sunburstRef} />
      <div className={styles.sunburstMessage}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
      <Downloads className={styles.downloadContainer}
                 href={'/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv'} />
      <SunburstDetails details={details} />
    </Hidden>
  </>;
}

export default SunburstVegaContainer;
