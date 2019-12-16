import React from 'react';
import {Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css';
import Paginator from './Paginator';
import { getRows } from './utils';


const count = 100000
const rows = getRows(count)

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: "hidden",
      data: props.data,
      page: 1,
      perPage: 10,
      scrollToIndex: undefined
    };

    this.defaultWidth = 800;

    this.handleRowsScroll = this.handleRowsScroll.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)

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

    const headerHeight = 30
    const rowHeight = 40
    const height = rowHeight * perPage;
    // const height = rowHeight * perPage + headerHeight;
    const rowCount = this.props.data.length;
    const pageCount = Math.ceil(rowCount / perPage)

    return (<>
      <Paginator
        pageCount={pageCount}
        currentPage={page}
        onPageChange={this.handlePageChange}
      />
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
    </>);
  }

}

// import React from 'react';
// import PropTypes from "prop-types";
// import * as $ from 'jquery';
// import DataTable from 'datatables.net';
// $.DataTable = DataTable;
// import './data-table.scss';
// import 'jquery-ui';
// import 'jquery-ui/themes/base/core.css';
// import 'jquery-ui/themes/base/theme.css';
// import 'jquery-ui/themes/base/selectable.css';
// import 'jquery-ui/ui/core';
// import 'jquery-ui/ui/widgets/selectable';
// import 'jquery-ui-bundle';
// import 'jquery-ui-bundle/jquery-ui.css';
//
// export default class Table extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDisplayed: "hidden",
//       data: props.data
//     };
//     console.log(props);
//
//   }
//
//   componentDidMount() {
//     $(`#${this.props.idName}`).DataTable({
//       dom: '<"data-table-wrapper">',
//       data: this.props.data,
//       columns:  this.props.columnTitles,
//       deferRender: true,
//       paging: false,
//       scroller: true
//     });
//
//   }
//
//   componentWillUnmount(){
//     $('.data-table-wrapper')
//       .find('table')
//       .DataTable()
//       .destroy(true);
//   }
//
//   show() {
//     console.log('show');
//     this.setState({isDisplayed: "show"});
//   }
//
//   hide() {
//     this.setState({isDisplayed: "hidden"});
//   }
//
//    render() {
//       return (<>
//         <table id={this.props.idName} className={this.state.isDisplayed} />
//       </>);
//   }
//
// }
//
// /*
//   Notes on props:
//   length of "columns" and each "data" row should match and have same order; excess data columns will not appear
// */
// DataTable.propTypes = {
//   display: PropTypes.bool,
//   columnTitles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
//   data: PropTypes.arrayOf(PropTypes.array).isRequired
// }
//
