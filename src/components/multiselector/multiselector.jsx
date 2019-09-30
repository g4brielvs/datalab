import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import './multiselector.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    maxWidth: 600,
    minWidth: 375,
  },
  chip: {
    margin: 2,
    borderRadius: 2,
    backgroundColor: '#c2d8f2'
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  chipsContainer: {
    paddingTop: 14,
    paddingBottom: 30,
    minHeight: 10,
    maxWidth: 200
  },
  placeholderDefault: {
    margin: 0
  }

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function Multiselector(props) {
  const classes = useStyles();

  const handleChange = event => {
    props.changeHandler(event.target.value);
  };

  const handleDelete = deletedChip => {
    props.changeHandler(props.selectedVal.filter(item => item[props.labelKey] !== deletedChip[props.labelKey]));
  }

  const MenuProps = {
    getContentAnchorEl: null,
    anchorEl: () => {
      return document.getElementsByClassName(classnames(classes.chipsContainer, props.placeholder)).item(0);
    },
    transformOrigin: { vertical: 'top', horizontal: 'left'},
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };


  return (
    <div className={classes.root}>
      <FormControl className={classnames(classes.formControl, classes.focused)} variant="outlined">
        <Select
          displayEmpty
          multiple
          value={props.selectedVal}
          onChange={handleChange}
          inputProps={{
            name: props.placeholder,
            id: 'select-multiple-placeholder-' + props.placeholder,
          }}
          renderValue={() => <h2 className={classes.placeholderDefault}>{props.placeholder}</h2>}
          MenuProps={MenuProps}
          autoWidth={true}
        >
          <MenuItem disabled value="">
            <h2 className={classes.placeholderDefault}>{props.placeholder}</h2>
          </MenuItem>
          {props.optionList.map(optionEntry => (
            <MenuItem key={optionEntry[props.labelKey]} value={optionEntry}>
              {optionEntry[props.labelKey]}
            </MenuItem>
          ))}
        </Select>
        <div className={classnames(classes.chipsContainer, props.placeholder)}>
          <div className={classes.chips}>
            {props.selectedVal.map(value => (
              <Chip key={value[props.labelKey]}
                    label={value[props.labelKey]}
                    className={classes.chip}
                    onDelete={() => {handleDelete(value);}}
                    deleteIcon={<ClearIcon />}/>
            ))}
          </div>
        </div>
      </FormControl>
    </div>
  );
}