import React from "react"
import loadable from '@loadable/component'
import flareData from '../../unstructured-data/contract-explorer/flare.json'
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

const Sunburst = loadable(() => import(`../../components/visualizations/sunburst-vega/sunburst-vega`),
  {
    fallback: <div className='progress_wrapper'>
                <CircularProgress className='progress' size={70} color='inherit' />
              </div>
  })


const SunburstVegaContainer = () => {
  return <Sunburst data={flareData}/>
}

export default SunburstVegaContainer







