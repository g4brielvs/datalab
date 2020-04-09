import React from 'react';
import resetStyles from './reset.module.scss';
import RefreshIcon from '@material-ui/icons/Refresh';

const Reset = (props) => (<button id={props.id} className={`reset-button ${resetStyles.resetButton}`} onClick={props._resetClick}><RefreshIcon /><span> Reset</span></button>);

export default Reset;
