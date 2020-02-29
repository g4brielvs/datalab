import React, { useState, useEffect } from 'react'

import { Grid, Hidden } from '@material-ui/core';

import Downloads from "src/components/section-elements/downloads/downloads"
import flareData from '../../../static/unstructured-data/contract-explorer/flare.json';
import SunburstDetails from './details/sunburst-details';
import Sunburst from 'src/components/visualizations/sunburst-vega/sunburst-vega';
import BreadCrumbs from "src/components/breadcrumbs/breadcrumbs";
import styles from './contract-explorer-container.module.scss';
import Search from 'src/components/chartpanels/search';
import appendColors from './utils/colors';
import findArcById from './utils/find-by-id';
import findArcByName from './utils/find-by-name';
import filterSunburst from './utils/filter';


const SunburstVegaContainer = () => {

  const defaultSelection = {
    name: 'flare',
    depth: 0
  }

  const [arc, setSelectedArc] = useState(defaultSelection);
  const [previousArc, setPreviousArc] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const [sunburstDetails, setDetails] = useState({});
  const [sunData, setOriginalData] = useState(flareData);
  const [updatedSunData, setData] = useState(sunData);
  const [pscData, setPscData] = useState([]);

   useEffect(() => {
    d3.csv('/unstructured-data/contract-explorer/PSC_by_Recip_FY18_v2.csv', function(data) {
      setPscData(data);
    });

    const details = getDetails();
    setDetails(details);
    setOriginalData(appendColors(flareData));

  }, []);

  // create arrays of unique agencies, subagencies and recipients with ID for search list
  let agencies = sunData.tree.filter(node => node.type === 'agency');
  agencies = agencies.map(function(x) {
    return {id: `a${x.name}`, display: x.name}
  });
  agencies = [...new Set([agencies])];

  let subagencies = sunData.tree.filter(node => node.type === 'subagency');
  subagencies = subagencies.map(function(x) {
    return {id: `s${x.name}`, display: x.name}
  });
  subagencies = [...new Set([subagencies])];

  let recipients = sunData.tree.filter(node => node.type === 'recipient');
  recipients = recipients.map(function(x) {
    return {id: `r${x.name}`, display: x.name}
  });
  recipients = [...new Set([recipients])];

  const searchList = agencies.concat(subagencies).concat(recipients).flat();

  const sunburstRef = React.createRef();

  const searchSelect = (id) => {
    const selectedArc = findArcById(sunData, id);
    const details = getSearchResults(selectedArc);
    updateAfterSearch(selectedArc, details);
  }

  function updateSunburst(selectedArc) {
    const newData = selectedArc.id === 1 ? sunData : { "tree": filterSunburst(sunData, selectedArc) };
    if (sunburstRef && sunburstRef.current) { sunburstRef.current.updateData(newData); }
    return newData;
  }

  function getTop5(items, type) {
    // get all unique values of the item type
    let unique = [...new Set(items.map(item => item[type]))];
    let summedItems = [];


    for (let i = 0; i < unique.length; i++) {
      summedItems.push({
        name: unique[i],
        type: type,
        obligation: items.filter(node => node[type] === unique[i]).reduce((a, b) => a + (b.size || 0), 0)
      });
    }

    return summedItems.sort((a, b) => (a.obligation < b.obligation) ? 1 : -1).slice(0, 5);
  }

  function createBreadcrumbTrail(selectedArc) {
    if (!selectedArc) { return; };

    const breadcrumbs = [];
    const agency = sunData.tree.find(node => node.name === selectedArc.agency);
    const trail = [defaultSelection];

    switch(selectedArc.depth) {
      case 0:
        return;
        break;
      case 1:
        breadcrumbs.push(agency);
        break;
      case 2:
        breadcrumbs.push(agency);
        breadcrumbs.push(selectedArc);
        break;
      case 3:
        const subagency = sunData.tree.find(node => node.id === selectedArc.parent);
        breadcrumbs.push(agency);
        breadcrumbs.push(subagency);
        breadcrumbs.push(selectedArc)
        break;
    }

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
    // if depth is 0, the item flare will be selected
    const selectedArc = findArcByName(sunData, d);
    updateAll(selectedArc);
  }

  const breadcrumbRef = React.createRef();

  function updateBreadcrumbs (selectedArc) {
    const trail = createBreadcrumbTrail(selectedArc);
    if (breadcrumbRef && breadcrumbRef.current) {
      breadcrumbRef.current.updateBreadcrumbs(selectedArc.colorHex, trail);
    }
    return trail;
  }

  // list the agencies for the selected
  function getSearchResults(selectedArc) {
    const depth = selectedArc && selectedArc.depth ? selectedArc.depth : 0;
    const pretext = 'Total Contracts Related To';

    const details = {
      heading: `${pretext} ${selectedArc.name}`,
      label: null,
      total: null,
      top5: [],
      name: null,
      subheading: null,
      allItems: [],
      type: 'search'
    };

    // get the top contribution for the selection
    switch (depth) {
      case 0:
        details.total = awardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        break;
      case 1:
        details.label = `${pretext} ${selectedArc.name}`;
        const agencyAwardsData = awardsData.filter(node => node.agency === selectedArc.name);
        details.total = agencyAwardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        // details.top5 = getTop5(agencyAwardsData, 'agency');
        // details.subheading = details.top5.length > 1 ? 'Agencies' : 'Agency';
        // find all instances of the agency
        break;
      case 2:
        details.label = `${pretext} ${selectedArc.name}`;
        const subagencyAwardsData = awardsData.filter(node => node.subagency === selectedArc.name);
        details.total = subagencyAwardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        // details.top5 = getTop5(subagencyAwardsData, 'agency');
        // details.subheading = details.top5.length > 1 ? 'Agencies' : 'Agency';


        // find all instances of the agency

        break;

      case 3:
        details.label = `${pretext} ${selectedArc.name}`;
        const recipientAwardsData = awardsData.filter(node => node.recipient === selectedArc.name);
        details.total = recipientAwardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        // details.top5 = getTop5(recipientAwardsData, 'agency');
        // details.subheading = details.top5.length > 1 ? 'Agencies' : 'Agency';

        break;
    }

    return details;

  }

  function getDetails (selectedArc) {
    const depth = selectedArc && selectedArc.depth ? selectedArc.depth : 0;

    const details = {
      label: null,
      total: null,
      top5: [],
      name: null,
      allItems: [],
      contractTotal: null,
      contractBySubagency: null,
      type: 'default'
    };

    const allRecipients = sunData.tree.filter(node => node.type === 'recipient');

    switch (depth) {
      case 0:
        // Nothing is selected
        details.label = 'Agencies';
        details.total = sunData.tree.filter(node => node.hasOwnProperty('size')).reduce((a, b) => a + (b.size || 0), 0);
        details.top5 = getTop5(allRecipients, 'agency');
        details.name = 'Contract Spending In Fiscal Year 2019';
        break;
      case 1:
        // Agency is selected
        details.label = 'Subagencies';
        details.total = sunData.tree.filter(node => node.agency === selectedArc.name && node.hasOwnProperty('size')).reduce((a, b) => a + (b.size || 0), 0);
        // details.top5 = getTop5(tempAwardData.filter(node => node.agency === selectedArc.agency), 'subagency');
        details.name = selectedArc.name;
        break;
      case 2:
        // Subagency is selected
        details.label = 'Contractors';
        const id = sunData.tree.find(node => node.type === 'subagency' && node.name === selectedArc.name).id;
        details.total = sunData.tree.filter(node => node.parent === id && node.hasOwnProperty('size')).reduce((a, b) => a + (b.size || 0), 0);
        // details.top5 = getTop5(tempAwardData.filter(node => node.agency === selectedArc.agency && node.subagency === selectedArc.name), 'recipient');
        details.name = selectedArc.name;
        break;
      case 3:
        // total awards for the contractor and selected agency / subagency
        // total awards for the contractor in total
        // list the PSC
        const subagency = sunData.tree.find(node => node.id === selectedArc.parent);
        details.type = 'recipient';
        details.contractBySubagencyHeading = `Contracts for ${subagency.name}`;
        details.total = sunData.tree.filter(node => node.type === 'recipient' && node.name === selectedArc.name && node.hasOwnProperty('size')).reduce((a, b) => a + (b.size || 0), 0);
        details.contractTotal = sunData.tree.filter(node => node.type === 'recipient' && node.name === selectedArc.name && node.parent === selectedArc.parent && node.hasOwnProperty('size')).reduce((a, b) => a + (b.size || 0), 0);
        details.name = selectedArc.name;
        details.allItems = pscData.filter(node => node.subagency === subagency.name && node.recipient === selectedArc.name);
        break;
    }

    return details;
  }

  // Upon arc selection, sunburst sends the arc info to the container
  // Use arc to the arc color, selected arc, update breadcrumbs and get details
  function updatePanels(tempArc) {
    if(tempArc !== arc) {
      const item = tempArc ? tempArc : arc;
      const trail = updateBreadcrumbs(item);
      const details = getDetails(item);

      // set state
      setBreadcrumbs(trail);
      setDetails(details);
    }
  }

  function updateAfterSearch(selectedArc, details) {
    const previousArc = arc;
    const newData = updateSunburst(selectedArc);
    const trail = updateBreadcrumbs(selectedArc);

    // set state
    setBreadcrumbs(trail);
    setDetails(details);
    setSelectedArc(selectedArc);
    setPreviousArc(previousArc);
    setData(newData);

  }

  function updateAll(selectedArc) {
    const previousArc = arc;
    const trail = updateBreadcrumbs(selectedArc);
    const details = getDetails(selectedArc);
    const newData = updateSunburst(selectedArc);

    // set state
    setData(newData);
    setBreadcrumbs(trail);
    setDetails(details);
    setSelectedArc(selectedArc);
    setPreviousArc(previousArc);

  }


  return <>
    <Hidden smDown>
      <Grid container spacing={4} className={styles.sectionContainer}>
        <Grid item md={6}>
          <Search
            searchList={searchList}
            listDescription='Search List of Contracts and Agencies'
            showIcon
            onSelect={searchSelect}
          />
          <div className={styles.sunburstDetails}>
            <SunburstDetails details={sunburstDetails} />
          </div>
        </Grid>
        <Grid item md={6}>
          <BreadCrumbs className={`${styles.header} ${styles.breadcrumbsContainer}`} items={breadcrumbs} onSelect={selectBreadcrumb} ref={breadcrumbRef} />
          <Sunburst
            data={updatedSunData}
            updatePanels={updatePanels}
            updateSunburst={updateAll}
            default={defaultSelection}
            ref={sunburstRef} />
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
      <Sunburst
        data={updatedSunData}
        updatePanels={updatePanels}
        updateSunburst={updateAll}
        default={defaultSelection}
        ref={sunburstRef} />
      <div className={styles.sunburstMessage}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
      <Downloads className={styles.downloadContainer}
                 href={'/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv'} />
      <SunburstDetails details={sunburstDetails} />
    </Hidden>
  </>;
}

export default SunburstVegaContainer;
