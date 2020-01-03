import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import DataTable from "../../../components/table/data-table";


const AgenciesTableContainer = (props) => {

  if(props.display) {
    return(<>
      <DataTable
        idName={'agenciesTable'}
        columnTitles={props.tableColumnTitles}
        data={props.tableData}
        ref={props.tableRef}
      />
    </>)
  } else {
    return null;
  }

}

export default AgenciesTableContainer;