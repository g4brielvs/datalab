import React, { useState } from "react"
import SEO from "../../components/seo"
import DTS from "../../components/visualizations/dts/dts"

function DTSPage(props) {


  return (
    <>
      <Default>
        <SEO title='Data Lab - Budget Function - U.S. Treasury' keywords={[`application`, `demo`]}/>
        <DTS data={csvData} />
      </Default>

    </>

  )

}

export default DTSPage
