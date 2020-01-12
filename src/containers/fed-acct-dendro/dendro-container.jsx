import React from 'react';
import loadable from '@loadable/component';

import FY17Data from '../../unstructured-data/federal-account-explorer/account_obligations_link_update_FY17.csv';
import FY18Data from '../../unstructured-data/federal-account-explorer/account_obligations_link_update_FY18.csv';
import FY19Data from '../../unstructured-data/federal-account-explorer/account_obligations_link_update_FY19Q3.csv';

const Dendro = loadable(() => import('../../components/visualizations/dendro/dendro'));



const DendroContainer = () => {
  return <Dendro fy17={FY17Data} fy18={FY18Data} fy19={FY19Data}/>
}

export default DendroContainer;