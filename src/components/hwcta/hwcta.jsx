import React, { useState } from "react"
import {Grid} from '@material-ui/core';
import Default from '../../components/layouts/default/default';
import HwctaLink from "../hwcta-link/hwcta-link"
import MoreAnalyses from "../more-analyses/more-analyses"
import hwctaStyles from './hwcta.module.scss';
import SEO from "../seo"
import ToolLayout from "../layouts/tool/tool"
import styles from "../layouts/tool/tool.module.scss"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


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
  const categories = props.categories;
  const categoriesHTML = [];
  let curCategory = null;
  let dataPage = '';

  for(let i = 0, il = categories.length; i < il; i++){
    curCategory = categories[i];
    const sourcesHTML = [];

    for(let j = 0, jl = curCategory.sources.length; j < jl; j++){
      sourcesHTML.push(<li className={hwctaStyles.sources}>{curCategory.sources[j]}</li>);
    }

    categoriesHTML.push(<Grid item md={12} lg={6}>
        <h3>{curCategory.name}</h3>
      </Grid>)
    categoriesHTML.push(
      <Grid item md={12} lg={6}>
        <ul>
          {sourcesHTML}
        </ul>
      </Grid>
      );
  }

  if(props.location){
    dataPage = props.location.href;
    if(dataPage){
      dataPage = dataPage.substring(0, dataPage.lastIndexOf('/'));
    }
  }

  return (

  <Default>
    <div className={hwctaStyles.hwctaPage}>
      <div className={hwctaStyles.container}>
        <header className={styles.header}>
          <Grid container justify='space-between' spacing={4}>
            {dataPage ? <Grid item xs={12}><a href={dataPage} className={hwctaStyles.backButtonHeader}><span className={hwctaStyles.backButtonHeaderSlash}>/</span>Back to Analysis</a></Grid> : ''}
            <Grid item xs={12} className={styles.title}>{props.title}</Grid>
          </Grid>
        </header>
        <section>
          <p className={styles.intro}>How we conducted this analysis</p>
          <p className={hwctaStyles.sectionText}>We conducted this analysis using data from the following sources</p>
        </section>

        <section>
          {props.children}
        </section>
        <section>
          <Grid container>
            {categoriesHTML}
          </Grid>
        </section>
        <section>
          {props.additionalInformation}
        </section>
      </div>
      <section className={hwctaStyles.footer}>
        <Grid container>
          {dataPage && !props.noFooterBackButton ?
            <Grid item xs={12}>
              <a href={dataPage} className={hwctaStyles.backButtonFooter}>
                <div className={hwctaStyles.backButtonFooterChevron}>
                  <ChevronRightIcon
                    aria-label='Go back'/>
                </div>Back to Analysis
              </a>
            </Grid>
            : ''}
        </Grid>
      </section>
      <section className={hwctaStyles.analysisOffset}>
        <Grid container>
          <Grid item xs={12}>
              <MoreAnalyses />
          </Grid>
        </Grid>
      </section>
    </div>
  </Default>
  )
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
