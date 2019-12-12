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
           unit={props.unit}
           scale={props.scale}
           clickEvent={props.clickEvent}
           _onloadFunctions={props.onloadFunctions}
           _svgClass={props.svgClass}>
        </Barchart>
}

export default HorizontalBarChartContainer


