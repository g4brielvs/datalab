import React from 'react';
import './footnotes.scss';

const Footnotes = (props) => {
  return (
    <div id="footnotes" className="container">
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
        Footnotes
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


