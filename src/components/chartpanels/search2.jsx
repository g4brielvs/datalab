import React from 'react';
import PropTypes from 'prop-types';

import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { InputAdornment, OutlinedInput, IconButton } from '@material-ui/core';
import { Clear as ClearIcon, Search as SearchIcon } from '@material-ui/icons';

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
  
    height & width are the size of the rendered list in px (container CSS may also need adjustment)
    initShow is true if it should be open when initialized
    onSelect is parent callback when an item is selected, passes back id value only
  */
  static propTypes = {
    'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
    'height': PropTypes.number,
    'width': PropTypes.number,
    'initItem': PropTypes.string,
    'listDescription': PropTypes.string.isRequired,
    'initShowList': PropTypes.bool,
    'onSelect': PropTypes.func
  };

  static defaultProps = {
    'height': 400,
    'width': 350
  };

  constructor(props) {
    super(props);

    // set initItem to display value of props.initItem's id, or blank
    let initItem = '';
    props.initItem && (initItem = this.props.searchList.find(e => e.id === props.initItem).display);

    this.state = {
      currentValue: initItem,
      expanded: this.props.initShowList,
      icon: initItem ? 'clear' : 'search'
    }
    this.filteredList = this.props.searchList;

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: this.props.height
    });
  }

  onFocus = () => {
    this.setState({ expanded: true });
  }

  clickIcon = () => {
    if (this.state.icon === 'search') {
      this.setState(prevState => ({ expanded: !prevState.expanded }));
    } else {
      this.filteredList = this.props.searchList;

      // recalc row heights after filter
      this.cache.clearAll();
      this.listRef.recomputeRowHeights();

      this.setState({
        currentValue: '',
        icon: 'search'
      });
    }
  }

  setListRef = ref => {
    this.listRef = ref;
  };

  filterSearch(event) {
    const currentValue = event.target.value;
    const filter = new RegExp(currentValue, 'i');
    this.filteredList = this.props.searchList.filter(n =>
      n.display.search(filter) !== -1
    );

    // recalc row heights after filter
    this.cache.clearAll();
    this.listRef.recomputeRowHeights();

    this.setState({
      currentValue: currentValue,
      expanded: true,
      icon: currentValue ? 'clear' : 'search'
    });
  }

  selectItem(i) {
    this.setState({
      currentValue: i.display,
      expanded: false,
      icon: 'clear'
    });
    if (this.props.onSelect) {
      this.props.onSelect(i.id);
    }
  }

  filterBoxIcon = () =>
    <InputAdornment position='end'>
      <IconButton
        aria-label={this.state.icon}
        onClick={this.clickIcon}
      >
        {this.state.icon === 'search' ? <SearchIcon /> : <ClearIcon />}
      </IconButton>
    </InputAdornment>
    ;

  row = ({ key, index, style, parent }) => (
    <CellMeasurer
      key={'search-list' + key}
      cache={this.cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div
        onClick={() => this.selectItem(this.filteredList[index])}
        style={style}
        className={styles.row}
      >
        {this.filteredList[index].display}
      </div>
    </CellMeasurer>
  );

  render = () => <div>
    <OutlinedInput
      value={this.state.currentValue}
      onChange={event => this.filterSearch(event)}
      onFocus={this.onFocus}
      placeholder={this.props.listDescription}
      inputProps={{ title: 'Search ' + this.props.listDescription }}
      variant='outlined'
      fullWidth
      className={styles.filterInput}
      endAdornment={this.filterBoxIcon()}
    />
    <AutoSizer style={{ width: this.props.width }}>
      {({ height }) =>
        <List
          width={this.props.width}
          height={height}
          rowRenderer={this.row}
          rowCount={this.filteredList.length}
          itemSize={35} // can't tell if this does anything inside an AutoSizer
          deferredMeasurementCache={this.cache}
          rowHeight={this.cache.rowHeight}
          className={styles.searchlist}
          ref={this.setListRef}
        >
          {this.row}
        </List>
      }
    </AutoSizer>
  </div>;
}
