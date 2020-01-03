import React from 'react';
import styles from './sankeyPopup.module.scss';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


/*
  We are going to do numerical mappings to the strings
  in the data to keep the props happy in
  'react-vis'
*/

export default class SankeyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedData: this.props.clickedNode,
    };
  }

  componentDidMount() {
    console.log("this is rendering this is popup");
  };

  render() {
    return(
      <div className={styles.sankeyPopover}>
        <p>
          hey hey we clicked a node and its {`${this.props.clickedNode}`};
        </p>
      </div>
    );
  };


};
