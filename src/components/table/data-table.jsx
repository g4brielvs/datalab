import React from 'react';
import PropTypes from 'prop-types';
import {Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Paginator from './Paginator';
import { getRows } from './utils';
import './data-table.scss';
import { Grid } from "@material-ui/core";

const count = 100000
const rows = getRows(count)

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: this.props.display,
      data: props.data,
      page: 1,
      perPage: 10,
      scrollToIndex: undefined
    };

    this.defaultWidth = 1000;

    this.handleRowsScroll = this.handleRowsScroll.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);

    if (typeof document !== 'undefined' && typeof window !== 'undefined' && document.getElementById('chart-area')) {
      this.defaultWidth = document.getElementById('chart-area');
    }

    console.log(this.defaultWidth);
  }

  handleRowsScroll({ stopIndex }) {
    this.setState(prevState => {
      const page = Math.ceil(stopIndex / prevState.perPage)
      return { page, scrollToIndex: undefined }
    })
  }

  handlePageChange(page) {
    this.setState(prevState => {
      const scrollToIndex = (page - 1) * prevState.perPage
      return { page, scrollToIndex }
    })
  }


  render() {
    const { page, perPage, scrollToIndex } = this.state;

    const rowHeight = 40
    const height = rowHeight * (perPage - 2);
    const rowCount = this.props.data.length;
    const pageCount = Math.ceil(rowCount / perPage);

    if (this.props.display) {
      return (<>
        <Grid container justify='centered'>
          <Grid item xs={10}>
            <Table
              width={this.defaultWidth}
              height={height}
              headerHeight={20}
              rowHeight={30}
              rowCount={rowCount}
              rowGetter={({index}) => this.props.data[index]}
              rows={this.state.data}
              scrollToIndex={scrollToIndex}
              scrollToAlignment='start'>
              {this.props.columnTitles.map((item, key) => {
                const columnWidth = this.defaultWidth / this.props.columnTitles.length;
                return (
                  <Column label={item.title} dataKey={key} width={columnWidth} />
                )
              })
              }
            </Table>
            <Paginator
              pageCount={pageCount}
              currentPage={page}
              onPageChange={this.handlePageChange}
            />
        </Grid>
        </Grid>
      </>);
    } else {
      return null;
    }
  }

}

// /*
//   Notes on props:
//   length of "columns" and each "data" row should match and have same order; excess data columns will not appear
// */
DataTable.propTypes = {
  display: PropTypes.bool,
  columnTitles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired
}

