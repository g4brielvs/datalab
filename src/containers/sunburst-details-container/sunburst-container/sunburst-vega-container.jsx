import React, { useState, useEffect } from "react"
import flareData from '../../../../static/unstructured-data/contract-explorer/flare.json';
import awardsData from '../../../../static/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv';
import Grid from "@material-ui/core/Grid/Grid";
import SunburstDetails from '../details/sunburst-details';
import Sunburst from '../../../components/visualizations/sunburst-vega/sunburst-vega';
import Breadcrumbs from '../breadcrumbs/sunburst-breadcrumbs';
import Search from '../search-container/sunburst-search-container';
import styles from './sunburst-vega-container.module.scss';


const SunburstVegaContainer = () => {

  useEffect(() => {
    getDetails();
  }, []);

  let breadcrumbsDefaults = {
    agency: null,
    subagency: null,
    recipient: null
  };

  let detailDefaults = {
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

    switch(depth) {
      case 0:
        details.label = 'Agencies';
        details.total = awardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData, 'agency');
        details.name = "Contract Spending In Fiscal Year 2019";
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
    <Grid
      container
      spacing = {4}>
      <Grid item sm={12} md={6}>
        <Search className={styles.header} />
      </Grid>
      <Grid item
            sm={12}
            md={6}
            className={styles.breadcrumbsContainer}>
        <Breadcrumbs className={styles.header} items={breadcrumbs}>&nbsp;</Breadcrumbs>
      </Grid>
    </Grid>
    <Grid
      container
      spacing = {4}
      className = {styles.sunburstVegaContainer}>
      <Grid item sm={12} md={6}>
        <SunburstDetails details={details} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Sunburst data={flareData} getDetails={getDetails} />
        <div className={styles.sunburstDetails}>The visualization contains data on primary awards to recipients.
          Sub-awards are not included.</div>
      </Grid>
    </Grid>
  </>
}

export default SunburstVegaContainer;








