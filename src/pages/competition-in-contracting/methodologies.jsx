import React from "react"
import HWCTA from '../../components/hwcta/hwcta';
import budgetJpg from '../../images/home/budget.jpg';

function CICHWCTA(props) {
  const title = 'COMPETITION IN CONTRACTING ANALYSIS';

  const categories = [{
    name: 'Category1',
    sources: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim Ut enim ad minim veniam',
      'Lorem ipsum dolor'
    ]
  },{
    name: 'Category2',
    sources: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Ut enim ad minim veniam Ut enim ad minim veniam',
      'Lorem ipsum dolor'
    ]
  },{
    name: 'Category3',
    sources: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
      'aaaaaa ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      'Lorem ipsum dolor'
    ]
  }]
  return (
    <HWCTA location={props.location} title={title} categories={categories}>
      <img className="" src={budgetJpg} alt=""/>
    </HWCTA>
  )
}

export default CICHWCTA;
