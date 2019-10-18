// import styles from './data-table.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import MUIDataTable from 'mui-datatables';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default class dataTable extends React.Component {
  constructor(props) {
    super(props);

    options = {
      serverSide: false,
      selectableRows: 'none',
      download: true,
      print: true,
      filterType: 'textField'
    };
  }

  // theme = () => createMuiTheme({
  //   overrides: {
  //     MUIDataTableBodyCell: {
  //       root: {
  //         backgroundColor: "#FF0000"
  //       }
  //     }
  //   }
  // });

  render = () =>
    <MUIDataTable
      title={this.props.title}
      columns={this.props.columns}
      data={this.props.data}
      options={this.options}
    />
}

dataTable.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

