import React from 'react';
import iconStyles from './icon.module.scss';

import infoIcon from '../../images/colleges-and-universities/infoicon.svg';
import closeIcon from '../../images/colleges-and-universities/closeicon.svg';

export default class InformationIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  };

  toggleClose = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render()
  {
    
    return(
      <div className={iconStyles.cfda} onClick={this.toggleClose}>
        <button className={iconStyles.cfdaTrigger} type="button">
          <img src={infoIcon}/>
        </button>

        {this.state.isOpen === true &&
         <div className={iconStyles.cfdaContents}>
           <button className={iconStyles.cfdaClose}>
             <img src={closeIcon}/>
           </button>
           <span>
             In this visualization, we identified and set apart grants used for research projects.
             This subset of grants were awarded to individuals, groups, or institutions. 
           </span>
         </div>
        }
        
      </div>
    );
  };
};
