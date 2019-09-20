import React, { useState } from "react"
import SEO from "../../components/seo"
import DTS from "../../components/visualizations/dts/dts"
import csvData from '../../large-datasets/dts.csv'

function DTSPage() {


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
