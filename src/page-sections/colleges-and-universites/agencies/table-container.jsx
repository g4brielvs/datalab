import React, { useState } from "react"
import Grid from "@material-ui/core/Grid/Grid";
import DataTable from "../../../components/table/data-table";


const AgenciesTableContainer = (props) => {

  const [tableData, setTableData] = useState(props.tableData);

  if(props.display) {
    return(<>
      <Grid item>
        <Grid container>
          <Grid item xs={10}>
            <DataTable
              idName={'agenciesTable'}
              columnTitles={props.tableColumnTitles}
              data={tableData}
              ref={props.tableRef}
            />
          </Grid>
        </Grid>
      </Grid>
    </>)
  } else {
    return null;
  }

}

export default AgenciesTableContainer;