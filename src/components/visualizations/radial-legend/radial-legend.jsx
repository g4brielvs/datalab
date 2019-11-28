import React, { useEffect } from "react"
import * as d3 from 'd3v4';

function RadialLegend (props) {

  useEffect(() => {


    d3.select('#agency-legend_scaleKey').append('circle')
      .attr('r', 25)
      .attr('class', 'legend_scaleKeyCircle')
      .attr('cx', 60)
      .attr('cy', 65);
    d3.select('#agency-legend_scaleKey').append('circle')
      .attr('r', 35)
      .attr('class', 'legend_scaleKeyCircle')
      .attr('cx', 60)
      .attr('cy', 65);
    d3.select('#agency-legend_scaleKey').append('circle')
      .attr('r', 45)
      .attr('class', 'legend_scaleKeyCircle')
      .attr('cx', 60)
      .attr('cy', 65);
  });

  return (<>
    <svg id='agency-legend_scaleKey'>
    </svg>
  </>);

}

export default RadialLegend;
