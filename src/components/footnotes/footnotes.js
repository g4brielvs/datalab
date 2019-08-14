import React from 'react';

const Footnotes = (props) => {
  return (
    <div id="footer" className="container">
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
              <p><sup>{index + 1}</sup><span>{footnote}</span></p>
            </>
          })}
        </div>
      </div>
  </div>
  )
}


export default Footnotes


