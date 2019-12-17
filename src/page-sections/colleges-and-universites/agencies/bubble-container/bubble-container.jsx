import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import { Hidden } from "@material-ui/core";
import agenciesStyles from "./bubble-container.module.scss";
import DataTable from "../../../../components/table/data-table";


const BubbleContainer = (props) => {

  return(<>
    <Grid container>
      <Grid item xs={1}>
        <Hidden smDown>
      <div id="agencies-legend-colorkey">
        <div className={agenciesStyles.legendCirclekeyLabel}><span>Agency</span></div>
      <div className={agenciesStyles.legendCirclekeyLabel}><span>Sub-Agency</span></div>
      <svg id={agenciesStyles.legendScalekey}>
        <circle r="25" className={agenciesStyles.legendScalekeyCircle} cx="60" cy="65"></circle>
        <circle r="35" className={agenciesStyles.legendScalekeyCircle} cx="60" cy="65"></circle>
        <circle r="45" className={agenciesStyles.legendScalekeyCircle} cx="60" cy="65"></circle>
      </svg>
      </div>
      </Hidden>
      </Grid>
      <Grid item xs={10}>
        <BubbleChart
          display={chartView}
          items={_data.allUnivBubbleChartCsv.nodes}
          showDetails={getClickedDetails}
          setLegendLeft={setLegendLeft}
          ref={chartRef}
        />

        <DataTable
          display={!chartView}
          idName={'agenciesTable'}
          columnTitles={tableColumnTitles}
          data={tableData}
        />
      </Grid>
    </Grid>
  </>)
}

  export default BubbleContainer;