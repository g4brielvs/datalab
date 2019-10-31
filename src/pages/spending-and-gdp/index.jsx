import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import ToolLayout from "../../components/layouts/tool/tool"
import AfgData from "../../libs/_data/object_mapping.yml"
import Default from "../../components/layouts/default/default"
import HeaderOnly from "../../components/layouts/Header-only/Header-only"
import { Helmet } from 'react-helmet';


function SpendingAndGdpPage(props) {

  console.log('props in spending and gdp', props);
  console.log('AfgData', AfgData);

  return (
    <>

      <Helmet>
        <script defer src="{/assets/ffg/spending/intro.js}"></script>
      </Helmet>

      <SEO 
        title='Data Lab - Federal Spending and GDP – U.S. Treasury'
        description='In 2019, the U.S. government spent $4.4 trillion.'
        excerpt='Where does all the money go? Most government spending is concentrated on programs that ensure the health and well-being of the people of the United States. Explore how spending compares to the size of the economy or to federal revenue.'
        keywords={[`federal spending, outlays, U.S. spending, U.S. revenue, gross domestic product, GDP, deficit, debt, mandatory spending, discretionary spending`]}
        socialMediaText='How much money did the government spend last year? How does it compare with federal revenue and the size of the economy? Download the federal spending and GDP .CSV file from Your Guide to America’s Finances. #YourGuide #DataLab #OpenGov'
        />

     <Default>
       <HeaderOnly></HeaderOnly>

       <div className="ffg-wrapper spending-intro">
        <h1>In {AfgData.current_fy.value}, the government spent {AfgData.current_fy_spending.value}.
            <button className="info-box-trigger" data-box-id="per-individual">
                <img src="/assets/ffg/icons/anecdote-spending.svg" alt="anecdote icon"></img>
            </button>
        </h1>

    <div className="viz-wrapper">
        <div id="viz"></div>

        <div className="intro-math intro-hidden">
            <i className="fas fa-reply intro-math__icon"></i>{AfgData.dot_number_spending.value} dots x {AfgData.dot_represents.value} = <strong>{AfgData.current_fy_spending.value}</strong>
        </div>

        <div id="copy" className="intro-hidden">
            <p>Where does all the money go? The government spends money on a variety of programs to promote the well-being of Americans. Why does the federal government do this? The Constitution provides an answer! The Constitution’s preamble states that the purpose of our government is “…to establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity.”</p>
        </div>

        <div className="facts sidebar intro-hidden">
            <div className="facts__inner">
                <div id="compare-options">
                    <p className="facts__prompt">How does federal spending compare to federal revenue and the size of the economy?</p>
                    <div className="facts__triggers">
                        <button className="facts__trigger" data-trigger-id="revenue">Federal Revenue</button>
                        <button className="facts__trigger" data-trigger-id="gdp">U.S. Economy</button>
                    </div>
                </div>

                <section id="revenue-facts" className="facts__section">
                    <h1>In Fiscal Year {AfgData.current_fy.value}, the federal government collected {AfgData.current_fy_revenue.value} in federal revenue.</h1>
                    <p>Since the government spent more than it collected, the deficit for {AfgData.current_fy.value} was {AfgData.current_fy_deficit.value}.
                    </p><p>
                        <a target="_blank" href="../revenue/">Go Explore Federal Revenue.</a>
                    </p>
                </section>

                <section id="gdp-facts" className="facts__section">
                    <h1>In Fiscal Year {AfgData.current_fy.value}, federal spending was equal to {AfgData.spending_percent_gdp.value} of the total gross domestic product (GDP), or economic activity, of the United States that year ({AfgData.current_fy_gdp.value}).</h1>

                    <p>Why do we compare federal spending to gross domestic product? One reason is to give a reference point for the size of the federal government, as measured by the amount it spends. U.S. gross domestic product is much larger than government spending, because it includes all the economic activity of the entire nation. Government spending equates to roughly {AfgData.spending_proportion.value} of the goods produced and services provided in the United States.</p>

                    <strong>What's gross domestic product?
                        <button className="info-box-trigger" data-box-id="gdp-info">
                            <img src="/assets/ffg/icons/definition.svg" alt="definition icon"></img>
                        </button>
                    </strong>
                </section>
            </div>
        </div>

        <section className="tour sidebar intro-hidden">
            <h1 className="tour__heading">What are the categories of federal spending?</h1>
            <a className="tour__link" href="./categories.html">Discover<i className="fas fa-chevron-right"></i></a>
        </section>
    </div>

    <div className="info-box" id="per-individual">
        <img src="/assets/ffg/icons/anecdote-spending.svg" alt="anecdote icon"></img>
        <p>How much is {AfgData.current_fy_spending.value} in federal spending?  If you divide it by the U.S. population estimate in {AfgData.current_fy.value}, {AfgData.us_population.value} (<a target="_blank" href="{AfgData.census_population.value}" target="_blank">U.S. Census Bureau</a>), it would equate to a little more than {AfgData.spending_per_individual.value} in federal spending for every individual.</p>
    </div>

    <div className="info-box" id="gdp-info">
        <img src="/assets/ffg/icons/definition.svg" alt="definition icon"></img>
        <p><strong>Gross domestic product (GDP)</strong> measures the size of the nation's economy by the total value of final goods and services that are produced in a year. Gross domestic product is used to compare the economies of different countries, measure growth in the economy, and determine the right monetary policies to address inflation and unemployment.</p>
    </div>

    <div className="info-box" id="billion-dollars">
        <img src="/assets/ffg/icons/anecdote-spending.svg" alt="anecdote icon"></img>
        <p>In this visualization, one dot represents {AfgData.dot_represents.value} of federal spending. </p>
    </div>
    </div>
     </Default>
    </>

  )

}

export default SpendingAndGdpPage
