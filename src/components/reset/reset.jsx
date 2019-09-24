import React from 'react';
import resetStyles from './reset.module.scss';
import RefreshIcon from '@material-ui/icons/Refresh';

const Reset = ({props}) => (<span className={'reset-button ' + resetStyles.resetButton}><RefreshIcon /><span> Reset</span></span>);


export default Reset
