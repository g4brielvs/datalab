const React = require('react');
const $ = require('jquery');
$.DataTable = require('datatables.net');

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

  }


  componentDidMount() {
    $('#' + this.props.idName).DataTable({
      dom: '<"data-table-wrapper">',
      data: this.props.data,
      columns:  this.props.columnTitles,
      deferRender: true,
      ordering: true,
      paging: true,
      processing: true
    });
  }
  componentWillUnmount(){
    $('.data-table-wrapper')
      .find('table')
      .DataTable()
      .destroy(true);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    if (this.props.display) {
      return (
        <>
          <table id={this.props.idName}/>
        </>
      )
    }
  }

}

/*
  Notes on props:
  length of "columns" and each "data" row should match and have same order; excess data columns will not appear
*/
// DataTable.propTypes = {
//   display: PropTypes.bool,
//   title: PropTypes.string,
//   columnTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   data: PropTypes.arrayOf(PropTypes.array).isRequired
// }

