
import React from 'react';
import PropTypes from 'prop-types';

import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default class dataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  options = {
    serverSide: false,
    selectableRows: 'none',
    download: true,
    print: true,
    filterType: 'textField'
  };

  theme = () => createMuiTheme({
    overrides: {
      MUIDataTableHeadCell: {
        fixedHeader: {
          textTransform: 'uppercase',
          fontSize: '17px',
          fontWeight: 700
        }
      },
      MUIDataTableBodyCell: {
        root: {
          fontSize: '17px'
        }
      }
    }
  });

  render = () =>
    <MuiThemeProvider theme={this.theme()}>
      <MUIDataTable
        title={this.props.title}
        columns={this.props.columnTitles}
        data={this.props.data}
        options={this.options}
      />
    </MuiThemeProvider>
}

/*
  Notes on props:
  length of "columns" and "data" should match and have same order; excess data columns will not appear
*/
dataTable.propTypes = {
  title: PropTypes.string,
  columnTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired
}

