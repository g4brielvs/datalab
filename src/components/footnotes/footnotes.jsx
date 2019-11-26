import React from 'react';
import footnotesStyles from './footnotes.module.scss';
import { Grid } from "@material-ui/core"

export default class Footnotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <Grid
      container
      id={footnotesStyles.footnotes}>
      <Grid item xs={12}>
          <div className={footnotesStyles.header}>Footnotes</div>
          <hr />
      </Grid>
      <Grid item xs={12}>
          {this.props.footnotes.map((footnote, i) => {
            return <p key={i}>
              <sup className={footnotesStyles.number}>{i + 1}</sup>
              <span className={footnotesStyles.text}>{footnote}</span>
            </p>
          })}
      </Grid>
    </Grid>
};
