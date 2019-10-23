import React, { useState } from "react"
import {Grid} from '@material-ui/core';
import Default from '../../components/layouts/default/default';
import Button from '@material-ui/core/Button';
import MoreAnalyses from "../more-analyses/more-analyses"
import hwctaStyles from './hwcta.module.scss';
import SEO from "../seo"
import ToolLayout from "../layouts/tool/tool"
import styles from "../layouts/tool/tool.module.scss"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StorySection from "../section-elements/story-section/story-section"
import DataModule from "../visualizations/federal-employees/util/data-module"


function HWCTA(props) {

  //Example categories input
  /*
    const categories = [{
      name: 'Homeless Population by Region',
      sources: [
        'Federal grant award data from <a href='http://USAspending.gov'>USAspending.gov</a>',
        'Point-in-Time (PIT) estimates of people experiencing homelessness from the Department of Housing and
        Urban Development's (HUD's) 2017 Point-in-Time (PIT) Data.'
      ]
    }];
   */
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
    <div className={hwctaStyles.hwctaPage}>
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
              <Grid container>
                {dataSources.map((item, key) => {
                  return <>
                    <Grid item md={12} lg={6}>
                      <h3>{item.name}</h3>
                    </Grid><Grid item md={12} lg={6}>
                    <ul>
                      {item.sources.map((source, key1) => {
                        return (
                          <li className={hwctaStyles.sources}>{source}</li>
                        )
                      })}
                    </ul></Grid>
                  </>
                })}
              </Grid>
            </section>
            : ''
          }
          {methodologies && methodologies.length ?
            <section>
              <h2>
                Methodologies
              </h2>
              <Grid container>
                {methodologies.map((item, key) => {
                  return <>
                    <Grid item md={12} lg={6}>
                      <h3>{item.name}</h3>
                    </Grid><Grid item md={12} lg={6}>
                    <ul>
                      {item.sources.map((source, key1) => {
                        return (
                          <li className={hwctaStyles.sources}>{source}</li>
                        )
                      })}
                    </ul></Grid>
                  </>
                })}
              </Grid>
            </section>
            : ''
          }
          {notes && notes.length ?
            <section>
              <h2>
                Notes
              </h2>
              <Grid container>
                {notes.map((item, key) => {
                  return <>
                    <Grid item md={12} lg={6}>
                      <h3>{item.name}</h3>
                    </Grid><Grid item md={12} lg={6}>
                    <ul>
                      {item.sources.map((source, key1) => {
                        return (
                          <li className={hwctaStyles.sources}>{source}</li>
                        )
                      })}
                    </ul></Grid>
                  </>
                })}
              </Grid>
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
