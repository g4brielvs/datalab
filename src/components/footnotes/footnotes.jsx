import React from 'react';
import footnotesStyles from './footnotes.module.scss';

const Footnotes = (props) => {
  return (
    <div id={footnotesStyles.footnotes} className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <div className={footnotesStyles.header}>Footnotes</div>
          <hr />
        </div>
      </div>
      <div class="row">
        <div className="col-xs-10 col-xs-offset-1">
          {props.footnotes.map(function (footnote, index) {
            return<>
              <p><sup className={footnotesStyles.number}>{index + 1}</sup><span className={footnotesStyles.text}>{footnote}</span></p>
            </>
          })}
        </div>
      </div>
  </div>
  )
}


export default Footnotes


