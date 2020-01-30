import React from 'react';
import PropTypes from 'prop-types';
// import { FixedSizeList as List } from 'react-window';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import 'react-virtualized/styles.css';
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
  
    height & width are the size of the rendered list in px
    initShow is true if it should be open when initialized
    showCollapse is simply whether to show the icon to expand/collapse to the right of the search box, don't include if you use another method to hide list
    onSelect is parent callback when an item is selected, passes back id value only
  */
  static propTypes = {
    'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
    'height': PropTypes.number,
    'width': PropTypes.number
  }
  static defaultProps = {
    'height': 400,
    'width': 350
  };

  constructor(props) {
    super(props);

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: this.props.height
    });
  }

  row = ({ key, index, style, parent }) => (
    <CellMeasurer
      key={key}
      cache={this.cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div key={key} style={style} className={styles.row}>
        {this.props.searchList[index].display}
      </div>
    </CellMeasurer>
  );

  render = () => <div>
    <AutoSizer style={{ width: this.props.width }}>
      {({ height }) =>
        <List
          width={this.props.width}
          height={height}
          rowRenderer={this.row}
          rowCount={this.props.searchList.length}
          // itemSize={35}
          deferredMeasurementCache={this.cache}
          rowHeight={this.cache.rowHeight}
          className={styles.searchlist}
        >
          {this.row}
        </List>
      }
    </AutoSizer>
  </div>;
}
