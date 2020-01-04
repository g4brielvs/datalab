import React from 'react';
import DataTable from "src/components/table/data-table";
import PropTypes from 'prop-types';


const CategoriesTableContainer = (props) => {

  if(props.display) {
    return(<>
      <DataTable
        fundingType={props.fundingType}
        title={props.title}
        columnTitles={props.columnTitles}
        data={props.data}
        ref={props.tableRef}
      />
    </>)
  } else {
    return null;
  }

}

export default CategoriesTableContainer;

CategoriesTableContainer.propTypes =  {
  display: PropTypes.bool.isRequired,
  fundingType: PropTypes.string.isRequired,
  title: PropTypes.string,
  columnTitles: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
}