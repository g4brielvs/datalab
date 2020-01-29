import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import styles from './search2.module.scss';

export default class Search extends React.Component {
  /*
    Notes on props:
    searchList is expected to be an array of {id, display}
    id values are arbitrary, but must be unique within the list to indicate which is selected (expected but not enforced by SearchPanel)
    display is a string or fragment of what exactly to display for that option
    e.g. [
      {
        id: 1,
        display: 'Department of Energy'
      }, {
        id: 37,
        display: 'NATIONAL TECHNOLOGY & ENGINEERING SOLUTIONS OF SANDIA LLC'
      }, {
        id: 'jadsfa',
        display: 'Department of Defense'
       }, {
        id: -12,
        display: 'Department of the Army'
      }
    ]
  
    initShow is true if it should be open when initialized
    showCollapse is simply whether to show the icon to expand/collapse to the right of the search box, don't include if you use another method to hide list
    onSelect is parent callback when an item is selected, passes back id value only
  */
  static propTypes = {
    'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
    'width': PropTypes.number
  }
  static defaultProps = {
    'width': 350
  };

  constructor(props) {
    super(props);
  }

  row = ({ index }) => (
    <div className={styles.ListRow}>
      {this.props.searchList[index].display}
    </div>
  );

  render = () => (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={this.props.width}
      className={styles.searchlist}
    >
      {this.row}
    </List>
  );
}
