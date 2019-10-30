import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import loadable from '@loadable/component'

const Sunburst = loadable(() => import(`../../components/visualizations/sunburst-vega/sunburst-vega`))

const SunburstVegaContainer = () => {

  const _data = useStaticQuery(graphql`
  query {
		allContractExplorerJson {
			nodes {
				tree {
					agency
					colorHex
					id
					name
					parent
					size
					type
				}
			}
		}
  }`)

  return <Sunburst data = {_data.allContractExplorerJson.nodes} />
}

export default SunburstVegaContainer







