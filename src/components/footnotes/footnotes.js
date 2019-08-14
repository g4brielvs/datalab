import React from 'react';
import './footnotes.scss';

const Footnotes = (props) => {
  return (
    <div id="footnotes" className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <div className="footnotes__header">Footnotes</div>
          <hr />
        </div>
      </div>
      <div class="row">
        <div className="col-xs-10 col-xs-offset-1">
          {props.footnotes.map(function (footnote, index) {
            return<>
              <p><sup className="footnote__number">{index + 1}</sup><span className="footnote__text">{footnote}</span></p>
            </>
          })}
        </div>
      </div>
  </div>
  )
}


export default Footnotes


