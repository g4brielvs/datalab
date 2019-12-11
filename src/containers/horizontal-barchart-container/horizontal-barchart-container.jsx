import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import loadable from '@loadable/component';

const Barchart = loadable(() => import('../../components/visualizations/horizontal-barchart/barchart'));


const HorizontalBarChartContainer = (props) => {
  const data = useStaticQuery(graphql`
          query {
            allCicDataJson {
              nodes {
                name
                cfo
                competedActions
                competedDollars
                notCompetedActions
                notCompetedDollars
                id
                displayed
                percentActionsCompeted
                percentDollarsCompeted
                totalActions
                totalDollars
              }
            }
          }
        `);

        return  <Barchart data={data}
           unit={this.props.unit}
           scale={this.props.scale}
           clickEvent={this.props.clickEvent}
           _onloadFunctions={this.props.onloadFunctions}
           _svgClass={this.props.svgClass}>
        </Barchart>
}

export default HorizontalBarChartContainer


