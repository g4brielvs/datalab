import React from 'react';
import PropTypes from 'prop-types';
import {Column, Table, SortDirection} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Paginator from './paginator';
import './data-table.scss';
import { Grid } from "@material-ui/core";
import * as _ from "lodash";
import numberFormatter from "src/utils/number-formatter";

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.data,
      page: 1,
      perPage: 10,
      scrollToIndex: undefined,
      sortBy: 'index'
    };

    this.defaultWidth = 1000;

    this.handleRowsScroll = this.handleRowsScroll.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.sort = this.sort.bind(this);
    this.updateTableData = this.updateTableData.bind(this);

    if (typeof document !== 'undefined' && typeof window !== 'undefined' && document.getElementById('chart-area')) {
      this.defaultWidth = 1.25 * (document.getElementById('chart-area').clientWidth);
    }
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

  updateTableData(list) {
    this.setState({list: list});
  }

  sort({sortBy, sortDirection}) {
    const {sortBy: prevSortBy, sortDirection: prevSortDirection} = this.state;

    // If list was sorted DESC by this column.
    // Rather than switch to ASC, return to "natural" order.
    if (prevSortDirection === SortDirection.DESC) {
      sortBy = null;
      sortDirection = null;
    }

    let {list} = this.state;
    let sortedList = list;

    if(sortBy) {
      sortedList = _.sortBy(list, item => item[sortBy]);

      if (sortDirection === SortDirection.DESC) {
        sortedList = sortedList.reverse();
      }

    }
    this.setState({sortBy, sortDirection, sortedList});
  }


  render() {
    const { page, perPage, scrollToIndex, sortedList, list, sortBy, sortDirection } = this.state;

    const rowHeight = 64
    const height = rowHeight * perPage;
    const rowCount = list.length;
    const pageCount = Math.ceil(rowCount / perPage);
    const currentlist = sortedList ? sortedList : list;


    return (<>
      <Grid container justify='center'>
        <Grid item>
          <Table
            width={this.defaultWidth}
            height={height}
            headerHeight={20}
            rowHeight={rowHeight}
            rowCount={rowCount}
            rowGetter={({index}) => currentlist[index]}
            scrollToIndex={scrollToIndex}
            scrollToAlignment='start'
            sort={this.sort}
            sortBy={sortBy}
            sortDirection={sortDirection}>
            {this.props.columnTitles.map((item, key) => {
              const columnWidth = this.defaultWidth / this.props.columnTitles.length;
              return (
                <Column
                  label={item.title}
                  dataKey={key.toString()}
                  width={columnWidth}
                  cellRenderer={({ cellData }) => typeof cellData === 'number' ? numberFormatter('dollars', cellData) : cellData }
                />
              )
            })}
          </Table>
        </Grid>
        <Grid item xs={12}>
            <Paginator
              itemCount={list.length}
              pageCount={pageCount}
              currentPage={page}
              onPageChange={this.handlePageChange}
            />
        </Grid>
      </Grid>
    </>);
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

