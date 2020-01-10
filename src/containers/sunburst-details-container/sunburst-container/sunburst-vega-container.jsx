import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styles from './sunburst-vega-container.module.scss';

import Breadcrumbs from '../breadcrumbs/sunburst-breadcrumbs';
import { Grid, Hidden } from '@material-ui/core';
import Search from '../../../components/chartpanels/rd/search';
import Sunburst from '../../../components/visualizations/sunburst-vega/sunburst-vega';
import SunburstDetails from '../details/sunburst-details';

import flareData from 'src/unstructured-data/contract-explorer/flare.json';
import awardsData from 'src/data/contract-explorer/awards_contracts.csv';

const SunburstVegaContainer = () => {

  const searchData = useStaticQuery(graphql`
    query {
      allAwardsContractsCsv {
        agencies:distinct(field: agency)
        subagencies:distinct(field: subagency)
        recipients:distinct(field: recipient)
      }
    }
  `);

  const searchList = searchData.allAwardsContractsCsv.agencies.map((n, i) => (
    {
      id: `a${i}`,
      display: n
    }
  ))
    .concat(
      searchData.allAwardsContractsCsv.subagencies.map((n, i) => (
        {
          id: `s${i}`,
          display: n
        }
      ))
    )
    .concat(
      searchData.allAwardsContractsCsv.recipients.map((n, i) => (
        {
          id: `r${i}`,
          display: n
        }
      ))
    )
    ;

  useEffect(() => {
    getDetails();
  }, []);

  const breadcrumbsDefaults = {
    agency: null,
    subagency: null,
    recipient: null
  };

  const detailDefaults = {
    label: null,
    total: null,
    top5: [],
    name: null
  }

  const [breadcrumbs, setBreadcrumbs] = useState(breadcrumbsDefaults);
  const [details, setDetails] = useState(detailDefaults);

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

  function getDetails(item) {

    const depth = item && item.depth ? item.depth : 0;

    let breadcrumbs = {
      agency: null,
      subagency: null,
      recipient: null
    };

    let details = {
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
        breadcrumbs.agency = item.agency;
        details.label = 'Subagencies';
        details.total = awardsData.filter(node => node.agency === item.agency).reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData.filter(node => node.agency === item.agency), 'subagency');
        details.name = item.name;
        break;
      case 2:
        breadcrumbs.agency = item.agency;
        breadcrumbs.subagency = item.name;
        details.label = 'Contractors';
        details.total = awardsData.filter(node => node.agency === item.agency && node.subagency === item.name).reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData.filter(node => node.agency === item.agency && node.subagency === item.name), 'recipient');
        details.name = item.name;
        break;
      case 3:
        const subagency = flareData.tree.filter(node => node.id === item.parent);
        breadcrumbs.agency = item.agency;
        breadcrumbs.subagency = subagency[0].name;
        breadcrumbs.recipient = item.name;
        details.total = awardsData.filter(node => node.agency === item.agency && node.subagency === subagency[0].name && node.recipient === item.name).reduce((a, b) => a + (b.obligation || 0), 0);
        details.name = item.name;
        break;
    }

    setBreadcrumbs(breadcrumbs);
    setDetails(details);
  }

  return <>
    <Hidden smDown>
      <Grid container spacing={4} className={styles.sectionContainer}>
        <Grid item md={6}>
          <Search
            searchList={searchList}
            listDescription='Search List of Contracts and Agencies'
            // initShowList={true}
            showCollapse={true}
          // onSelect= PropTypes.func

          />
          <div className={styles.sunburstDetails}>
            <SunburstDetails details={details} />
          </div>
        </Grid>
        <Grid item md={6}>
          <Breadcrumbs className={styles.header} items={breadcrumbs} className={styles.breadcrumbsContainer} />
          <Sunburst data={flareData} getDetails={getDetails} />
          <div className={styles.sunburstMessage}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
        </Grid>
      </Grid>
    </Hidden>
    <Hidden mdUp>
      <Search
        searchList={searchList}
        listDescription='List of Contracts and Agencies'
        // initShowList={true}
        // showCollapse={true}
      // onSelect= PropTypes.func

      />
      <Breadcrumbs className={styles.header} items={breadcrumbs}></Breadcrumbs>
      <Sunburst data={flareData} getDetails={getDetails} />
      <div className={styles.sunburstDetails}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
      <SunburstDetails details={details} />
    </Hidden>
  </>;
}

export default SunburstVegaContainer;
