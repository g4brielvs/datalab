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
      <SEO 
        title='Data Lab - Federal Spending and GDP – U.S. Treasury'
        description='In 2019, the U.S. government spent $4.4 trillion.'
        excerpt='Where does all the money go? Most government spending is concentrated on programs that ensure the health and well-being of the people of the United States. Explore how spending compares to the size of the economy or to federal revenue.'
        keywords={[`federal spending, outlays, U.S. spending, U.S. revenue, gross domestic product, GDP, deficit, debt, mandatory spending, discretionary spending`]}
        socialMediaText='How much money did the government spend last year? How does it compare with federal revenue and the size of the economy? Download the federal spending and GDP .CSV file from Your Guide to America’s Finances. #YourGuide #DataLab #OpenGov'
        />

     <Default>
       <HeaderOnly></HeaderOnly>
       <Helmet></Helmet>
     </Default>
    </>

  )

}

export default SpendingAndGdpPage
