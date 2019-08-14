import React from 'react';
import "flexboxgrid"

const Footnotes = (props) => {
  return (
  <div id="footer">
    Footnotes
    <hr />
      {props.footnotes.map(function (footnote, index) {
        return<>
          <p><sup>{index + 1}</sup><span>{footnote}</span></p>
        </>
      })}
  </div>
  )
}


export default Footnotes


