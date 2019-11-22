import React, { useState } from "react"
import {Grid} from '@material-ui/core';
import Default from '../../components/layouts/default/default';
import Button from '@material-ui/core/Button';
import hwctaStyles from './hwcta.module.scss';
import styles from "../layouts/tool/tool.module.scss"
import PageHeader from "../headers/page"


function HWCTA(props) {
  const dataSources = props.dataSources || [];
  const methodologies = props.methodologies || [];
  const notes = props.notes || [];
  let dataPage = '';

  if(props.location){
    dataPage = props.location.href;
    if(dataPage){
      dataPage = dataPage.substring(0, dataPage.lastIndexOf('/'));
    }
  }

  return <>

  <Default>
    <PageHeader
      headerItems={['Analyses', 'DataLab Express', "America's Finance Guide", 'Resources', 'Glossary']}
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
            {header: 'Revenue', name: 'Revenue and GDP', link: '#'},
            {header: 'Revenue', name: 'Revenue Categories', link: '#'},
            {header: 'Revenue', name: 'Federal Revenue Trends', link: '#'},
            {header: 'Revenue', name: 'Country Comparison', link: '#'},
            {header: 'Spending', name: 'Spending and GDP', link: '/americas-finance-guide/spending-and-gdp'},
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
      isHome={ false }
    />

    <div id={hwctaStyles.hwctaPage}>
      <div className={hwctaStyles.container}>
        <header className={styles.header}>
          <Grid container justify='space-between' spacing={4}>
            {dataPage ? <Grid item xs={12}><a href={dataPage} className={hwctaStyles.backButtonHeader}>Back</a></Grid> : ''}
            <Grid item xs={12} className={hwctaStyles.title}>{props.title}</Grid>
          </Grid>
        </header>
        <h1 className={hwctaStyles.pageHeaderText}>Data Sources and Methodologies</h1>
        <section>
          {props.children}
        </section>
        <div className={hwctaStyles.sourcesSections}>
          {dataSources && dataSources.length ?
            <section>
              <h2>
                Data Sources
              </h2>
                {dataSources.map((item, key) => {
                  return (
                    item.content ? item.content :
                      <Grid container key={key} className={hwctaStyles.sourcesContainer}>
                        <Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
                          <h3>{item.name}</h3>
                        </Grid><Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
                          {item.sources}
                        </Grid>
                      </Grid>
                  )
                })}
            </section>
            : ''
          }
          {methodologies && methodologies.length ?
            <section>
              <h2>
                Methodologies
              </h2>
                {methodologies.map((item, key) => {
                  return (
                    item.content ? item.content :
                      <Grid container key={key} className={hwctaStyles.sourcesContainer}>
                        <Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
                          <h3>{item.name}</h3>
                        </Grid><Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
                          {item.sources}
                        </Grid>
                    </Grid>
                  )
                })}
            </section>
            : ''
          }
          {notes && notes.length ?
            <section>
              <h2>
                Notes
              </h2>
                {notes.map((item, key) => {
                  return (
                    item.content  ? item.content :
                      <Grid container key={key} className={hwctaStyles.sourcesContainer}>
                        <Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
                          <h3>{item.name}</h3>
                        </Grid><Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
                        {item.sources}
                      </Grid>
                    </Grid>
                  )
                })}
            </section>
            : ''
          }
        </div>
      </div>
      <section className={hwctaStyles.footer} id={hwctaStyles.backButtonFooterSection}>
        <Grid container>
          {dataPage && !props.noFooterBackButton ?
            <Grid item xs={12}>
              <Button variant="contained" size="medium" className={hwctaStyles.backButtonFooter}>
                <a href={dataPage}>
                  Back
                </a>
              </Button>
            </Grid>
            : ''}
        </Grid>
      </section>
    </div>
  </Default>
  </>
}

export default HWCTA;

{/*<ToolLayout title={props.title}*/}
{/*            introSentence='How we conducted this analysis'*/}
{/*            contextStatement='We conducted this analysis using data from the following sources'>*/}
{/*  <SEO title="Competition in Contracting" keywords={[`gatsby`, `application`, `react`]}/>*/}
{/*  <div>{props.children}</div>*/}

{/*  <Grid container>*/}
{/*    {categoriesHTML}*/}
{/*  </Grid>*/}
{/*</ToolLayout>*/}
