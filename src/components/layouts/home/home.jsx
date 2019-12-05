import React from "react";
import PropTypes from "prop-types";
import Default from "../default/default";
import PageHeader from '../../headers/page';

import homeTemplateStyles from "./home.module.scss";

const Home = ({ children }) => (
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
                {name: 'Competition In Contracting', link: '/competition-in-contracting'}
              ]},
              {
              express: [
                /* {name: 'Research and Development in Contracting', link: '/test-link'}, */
                /* {name: 'Women-Owned Small Businesses', link: '/test-link'} */
              ]},
              {
              ffg: [
                {header: 'Overview', name: "America's Finance Guide", link: '#'},
                {header: 'Revenue', name: 'Revenue and GDP', link: '/americas-finance-guide/revenue-and-gdp'},
                {header: 'Revenue', name: 'Revenue Categories', link: '#'},
                {header: 'Revenue', name: 'Federal Revenue Trends', link: '/americas-finance-guide/revenue-trends'},
                {header: 'Revenue', name: 'Country Comparison', link: '/americas-finance-guide/revenue-country-comparison'},
                {header: 'Spending', name: 'Spending and GDP', link: '/americas-finance-guide/spending-and-gdp'},
                {header: 'Spending', name: 'Spending Categories', link: '#'},
                {header: 'Spending', name: 'Federal Spending Trends', link: '/americas-finance-guide/spending-trends'},
                {header: 'Spending', name: 'Country Comparison', link: '#'},
                {header: 'Deficit', name: 'Explore Deficit', link: '/americas-finance-guide/explore-deficit'},
                {header: 'Deficit', name: 'Federal Deficit Trends', link: '/americas-finance-guide/deficit-trends'},
                {header: 'Deficit', name: 'Country Comparison', link: '#'},
                {header: 'Debt', name: 'Explore Debt', link: '/americas-finance-guide/explore-debt'},
                {header: 'Debt', name: 'Federal Debt Trends', link: '/americas-finance-guide/debt-trends'},
                {header: 'Debt', name: 'Federal Debt Analysis', link: '#'},
                {header: 'Debt', name: 'Country Comparison', link: '#'},
              ]},
              {
              resources: [
                {name: 'Analyst Guide', link: '/analyst-guide'},
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
            isHome={ true }
           />

          <div className={homeTemplateStyles.default}>
            {children}
          </div>
        </Default>
      </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
