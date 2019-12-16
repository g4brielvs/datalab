import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

export default class ExpressModule extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => <>
    <Grid container>
      <Grid item>
        {this.props.title}
      </Grid>
      <Grid item>
        {this.props.subtitle}
      </Grid>
      <Grid item>
        {this.props.text}
      </Grid>
    </Grid>

    {this.props.children}
  </>
}

ExpressModule.PropTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
