import React from 'react';
import DataTable from "../../../components/table/data-table";

const CategoriesTableContainer = (props) => {

  if(props.display) {
    return(<>
      <DataTable
        fundingType={props.fundingType}
        title={props.title}
        columnTitles={props.columnTitles}
        data={props.data}
      />
    </>)
  } else {
    return null;
  }

}

export default CategoriesTableContainer;