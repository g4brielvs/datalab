import React from 'react';

import FY17Data from '../../../static/unstructured-data/federal-account-explorer/account_obligations_link_update_FY17.csv';
import FY18Data from '../../../static/unstructured-data/federal-account-explorer/account_obligations_link_update_FY18.csv';
import FY19Data from '../../../static/unstructured-data/federal-account-explorer/account_obligations_link_update_FY19Q3.csv';
import Dendro from '../../components/visualizations/dendro/dendro';
import Downloads from "../../components/section-elements/downloads/downloads";


class FedAcctContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fiscalYearVal: 'fy19', // default fy19
    };
  };

  radioCheck = (event) => {
    this.setState({
      fiscalYearVal: event.target.value
    });
  };

  fiscalYearCheck = () => {
    if (this.state.fiscalYearVal === 'fy19') return '/data/federal-account-explorer/fy19.csv';
    if (this.state.fiscalYearVal === 'fy18') return '/data/federal-account-explorer/fy18.csv';
    if (this.state.fiscalYearVal === 'fy17') return '/data/federal-account-explorer/fy17.csv';
    else return '';
  };
  
  render() {
    return <> <Dendro radioCheck={this.radioCheck} fy17={FY17Data} fy18={FY18Data} fy19={FY19Data}/>;
             <Downloads
               href={this.fiscalYearCheck()}
               date={'March 2019'}
             />
           </>;

  };

};

export default FedAcctContainer;
