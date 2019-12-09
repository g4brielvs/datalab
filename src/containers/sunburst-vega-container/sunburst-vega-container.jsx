import React from "react"
import loadable from '@loadable/component'
import flareData from '../../unstructured-data/contract-explorer/flare.json'

const Sunburst = loadable(() => import(`../../components/visualizations/sunburst-vega/sunburst-vega`))


const SunburstVegaContainer = () => {
  return <Sunburst data={flareData}/>
}

export default SunburstVegaContainer







