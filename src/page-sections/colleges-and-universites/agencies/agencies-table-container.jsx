import React from "react";
import DataTable from "src/components/table/data-table";
import PropTypes from "prop-types";


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

AgenciesTableContainer.propTypes =  {
  display: PropTypes.bool.isRequired,
  tableColumnTitles: PropTypes.array.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.array).isRequired
}