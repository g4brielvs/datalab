import React from 'react';
import styles from './sankeyPopup.module.scss';
import Chip from '@material-ui/core/Chip';
//import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { formatNumber } from '../../../../utils/number-formatter';

import leftData from '../../../../unstructured-data/opioid-crisis/sankeyLeftTest.json';
import rightData from '../../../../unstructured-data/opioid-crisis/sankeyRightTest.json';

/*
  Popover trigger on `Node` click
*/
export default class SankeyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedData: this.props.clickedNode,
      isOpen: this.props.isOpen,
    };
  }

  /*
    Helper method to return array of objects with no duplicates
   */
  getUnique = (arr, comp) => {
    const unique = arr
          .map(e => e[comp])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter(e => arr[e]).map(e => arr[e]);
    return unique;
  }

  /*
    Called when we click on "left side" of sankey
  */
  findSubagencies = (agency) => {
    let subagencies = leftData.filter(x => {
      return (x.source === agency);
    });
    return subagencies.map(x => ({subagency: x.target, value: x.value}));
  };


  /*
    Called when we click on "center side" of sankey
  */
  findSocieties = (subagency) => {
    let societies = rightData.filter(x => {
      return (x.source === subagency);
    });
    return societies.map(x => ({society: x.target, value: x.value}));
  };

  /*
    "Follow" an Agency through the graph and get all its Societies (from its said subagencies...)
   */
  findLinks = (agency) => { 
    let subagencies = this.findSubagencies(agency); // finding all the matching guys in "the middle" of the graph...
    let societiesToAgency = [];

    // then we'll loop through all of our guys in the middle and return all the "links" through them.
    subagencies.map(x => {
      let data = this.findSocieties(x.subagency);
      //      return Array.from(new Set(data.map(y => ({linkedSociety: y.society, value: y.value}))));
      data.forEach(y => {
        societiesToAgency.push({linkedSociety: y.society, value: y.value});
      });
    });
    return this.getUnique(societiesToAgency, 'linkedSociety');
  };

  setClose = () => {
    this.setState({isOpen: false});
  };

  render() {
    const show = this.props.isOpen;
    const clickedNode = this.props.clickedNode;

    const nodeColor = {color: clickedNode.color};
    const nodeColorBorder = {border: `3px solid ${clickedNode.color}`};
    const nodeColorBorderBottom = {borderBottom: `3px solid ${clickedNode.color}`};

    const subagencyMapping = this.findSubagencies(clickedNode.name).map((x) => {
      return(
        <div className={styles.agencyDiv}>
          <p className={styles.agencyParagraph}>{x.subagency}</p>
          <p className={styles.agencyValue} style={nodeColor}>{x.value}</p>
        </div>
      );
    });

    const societiesMapping = this.findLinks(clickedNode.name).map((x) => {
      return(
        <div className={styles.societyDiv}>
          <p className={styles.societyParagraph}>{x.linkedSociety}</p>
          <p className={styles.societyValue} style={nodeColor}>{x.value}</p>
        </div>
      );
    });

    // const linksMapping = this.findLinks(clickedNode.name).map((x) => {
    //   // todo todo todo todo !
    // });

    return(
      <div className={`${styles.sankeyPopover} ${show ? `${styles.sankeyShow}` : `${styles.sankeyHide}`}`} style={nodeColorBorder}>
        <div className={styles.sankeyPopoverAgency} style={nodeColorBorderBottom}>
          <Chip size='medium' label='Agency' className={styles.sankeyPopoverBadge}/>
          <p className={styles.sankeyPopoverAgencyText}>
            {clickedNode.name}
          </p>
          <p className={styles.sankeyPopoverAgencyValue} style={nodeColor}>
            Total Amount: {clickedNode.value}
          </p>
          <FontAwesomeIcon icon={faWindowClose} className={styles.windowClose} />
        </div>
        <div className={styles.sankeyPopoverSubagency} style={nodeColorBorderBottom}>
          <Chip size='medium' label='Subagency'/>
          <div className={styles.subagencyContainer}>
            {subagencyMapping}
          </div>
        </div>
        <div className={styles.sankeyPopoverSocieties}>
          <Chip size='medium' label='Societies'/>
          <div className={styles.societiesContainer}>
            {societiesMapping}
          </div>
        </div>
      </div>
    );
  };

};
