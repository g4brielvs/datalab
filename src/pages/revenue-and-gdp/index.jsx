import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import ToolLayout from "../../components/layouts/tool/tool"

function RevenueAndGdpPage(props) {
  return (
    <>
      <SEO title='Data Lab - Budget Function - U.S. Treasury' keywords={[`application`, `demo`]}/>

      <ToolLayout
        title='revenue and gdp demo page'
        introSentence="In 2019, the government collected $3.5 trillion in revenue."
        contextStatement="This is another sentence in a smaller font size."
        sectionTitle='Section Title Here'
        sectionText="<p>this is a dummy verison of the budget function page, used by the revenue and gdp link</p>">

        <div></div>

      </ToolLayout>
    </>

  )

}

export default RevenueAndGdpPage
