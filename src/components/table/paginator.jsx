import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import './data-table.scss';

export default class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.numPages = Math.ceil(props.rowCount / this.props.rowsPerPage);
  }

  handlePaginationChange = (e, { activePage }) => this.props.onPageChange(activePage);

  render = () =>
    <Pagination
      role='navigation'
      aria-label='table page navigator'
      totalPages={this.numPages}
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      prevItem={{ content: '<', icon: true, disabled: this.props.currentPage === 1 }}
      nextItem={{ content: '>', icon: true, disabled: this.props.currentPage === this.numPages }}
      ellipsisItem={{ content: '...', icon: true, className: 'disabled' }}
      onPageChange={this.handlePaginationChange}
    />
    ;
}

Paginator.propTypes = {
  rowCount: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
}

Paginator.defaultProps = {
  currentPage: 1
}
