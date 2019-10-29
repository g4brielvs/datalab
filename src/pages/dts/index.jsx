import React from "react";

import SEO from "../../components/seo";
import DTS from "../../components/visualizations/dts/dts";
import Default from "../../components/layouts/default/default";

import csvData from '../../unstructured-data/dts/dts.csv';
import HWCTALink from "../../components/hwcta-link/hwcta-link";
import Share from "../../components/share/share";
import PageHeader from '../../components/headers/page';

function DTSPage(props) {

  return (
    <>
      <Default>
      <PageHeader
      headerItems={['Analyses', 'DataLab Express',  "America's Finance Guide", 'Resources', 'Glossary']}
      megamenuItems={[
        {
        analyses: [
          {name: 'Colleges and Universities', link: '/colleges-and-universities'},
          {name: 'DTS Tracker', link: '/dts'},
          {name: 'Contract Spending Analysis', link: '/contracts-over-time'},
          {name: 'Federal Account Explorer', link: '/federal-account-explorer'},
          {name: 'Contract Explorer', link: '/contract-explorer'},
          {name: 'Homelessness Analysis', link: '/homelessness-analysis'},
          {name: 'Budget Function', link: '/budget-function'},
          {name: 'Federal Employees', link: '/federal-employees'},
          {name: 'Competition In Contracting', link: '/competition-in-contacting'}
        ]},
        {
        express: [
          {name: 'test express', link: 'test-link'}
        ]},
        {        
        ffg: [
          {header: 'Overview', name: "America's Finance Guide", link: '#'},
          {header: 'Revenue', name: 'Revenue and GDP', link: '/revenue-and-gdp'},
          {header: 'Revenue', name: 'Revenue Categories', link: '#'},
          {header: 'Revenue', name: 'Federal Revenue Trends', link: '#'},
          {header: 'Revenue', name: 'Country Comparison', link: '#'},
          {header: 'Spending', name: 'Spending and GDP', link: '#'},
          {header: 'Spending', name: 'Spending Categories', link: '#'},
          {header: 'Spending', name: 'Federal Spending Trends', link: '#'},
          {header: 'Spending', name: 'Country Comparison', link: '#'},
          {header: 'Deficit', name: 'Explore Deficit', link: '#'},
          {header: 'Deficit', name: 'Federal Deficit Trends', link: '#'},
          {header: 'Deficit', name: 'Country Comparison', link: '#'},
          {header: 'Debt', name: 'Explore Debt', link: '#'},
          {header: 'Debt', name: 'Federal Debt Trends', link: '#'},
          {header: 'Debt', name: 'Federal Debt Analysis', link: '#'},
          {header: 'Debt', name: 'Country Comparison', link: '#'},
        ]},
        {
        resources: [
          {name: 'Analyst Guide', link: '#'},
          {name: 'API Guide', link: 'http://api.usaspending.gov'},
          {name: 'Data Model', link: 'https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html'},
          {name: "Student Innovator's Toolbox", link: '/student-innovators-toolbox'},
        ]},
        {
        glossary: [
          {name: 'Glossary', link: '#'}
        ]},
      ]
      }
      isHome={ false }
     />
        <SEO title='Data Lab - Budget Function - U.S. Treasury' keywords={[`application`, `demo`]}/>
        <div className="dts-css">
          <div className="dts-tt-container">
            <div className="dts-tt-date"></div>
            <div className="dts-tt-hr-separator"></div>
            <div className="dts-tt-category"></div>
            <div className="dts-tt-timeframe dts-tt-timeframe-daily dts-tt-timeframe-active"><span
              className="dts-tt-timeframe-label">DAILY</span><span className="dts-tt-daily-value"></span></div>
            <div className="dts-tt-timeframe dts-tt-timeframe-mtd"><span className="dts-tt-timeframe-label">MTD</span><span
              className="dts-tt-mtd-value"></span></div>
            <div className="dts-tt-timeframe dts-tt-timeframe-fytd"><span
              className="dts-tt-timeframe-label">FYTD</span><span className="dts-tt-fytd-value"></span></div>
          </div>

          <div className="dts-container">
            <div className="header-container">
              <div className="header-title">Visualizing The Daily Treasury Statement</div>
              <div className="header-subtitle">How much does the federal government spend each day?</div>
              <div className="header-line-break"></div>
              <div className="header-sub-container">
                <div></div>
                <div className="header-updated-when"></div>
                <div className="flex">
                  <Share
                    location={props.location}/>
                </div>
              </div>
            </div>

            <div className="dts-controls-and-svg">
              <div className="dts-header">
                <div className="daily-spending-container">
                  <div className="daily-spending-subtext">Amount Spent On</div>
                  <div className="daily-spending-amount">$0</div>
                </div>
                <div className="period-container">
                  <div className="period-button-header">Chart Range</div>
                  <div className="period-button-container">
                    <div className="period-button period-button-default" data-range="30d">30D</div>
                    <div className="period-button" data-range="90d">90D</div>
                    <div className="period-button" data-range="1y">1Y</div>
                    <div className="period-button" data-range="5y">5Y</div>
                    <div className="period-button" data-range="10y">10Y</div>
                  </div>
                </div>
                <div className="frequency-container">
                  <div className="frequency-selector-label">Frequency</div>
                  <select id="frequency-selector" className="custom-select">
                    <option value="today">DAILY</option>
                    <option value="mtd">MTD</option>
                    <option value="fytd">FYTD</option>
                  </select>
                </div>
                <div className="category-container">
                  <div className="category-select-label">Categories</div>
                  <select className="custom-select custom-select-start" id="category-selector"></select>
                </div>
              </div>
              <DTS data={csvData} />

              <HWCTALink/>
            </div>
          </div>
        </div>
      </Default>
    </>

  )

}

export default DTSPage
