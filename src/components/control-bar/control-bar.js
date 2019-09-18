import React from 'react';
import controlBarStyles from './control-bar.module.scss';


const ControlBar = (props) => (

      <div className={controlBarStyles.controlBar}>
        <div className="row">
          <div className="col-xs-12 leftAlignChildren">
            {props.children}
          </div>
        </div>
      </div>
);


export default ControlBar
