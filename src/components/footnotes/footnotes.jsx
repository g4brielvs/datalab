import React from 'react';
import footnotesStyles from './footnotes.module.scss';

export default class Footnotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <div id={footnotesStyles.footnotes} className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <div className={footnotesStyles.header}>Footnotes</div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          {this.props.footnotes.map((footnote, i) => {
            return <p key={i}>
              <sup className={footnotesStyles.number}>{i + 1}</sup>
              <span className={footnotesStyles.text}>{footnote}</span>
            </p>
          })}
        </div>
      </div>
    </div>
};
