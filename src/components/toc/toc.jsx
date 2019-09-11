import React from 'react';
import PropTypes from 'prop-types';
import './toc.scss';


const Toc = ({sections}) => {
	return (
		<>
      <section id="TOC">
        <div className="row">
          <div className="col-lg-offset-1 col-lg-10">
            <div className="row">
              {sections.map((item, key) =>
                  <div key={key} className="col-lg-3 col-md-6 col-xs-12 toc__tile">
                    <a href={`#section-${item.section}`}>
                      <div className="row">
                        <span className="toc__number col-xs-4">
                          <h2> {item.number} </h2>
                        </span>
                        <span className="toc__blurb  col-xs-8">{item.section}</span>
                      </div>
                      <div className="toc__subblurb"> {item.subblurb} </div>
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
		</>
  )
}

export default Toc;

Toc.propTypes = {
	sections: PropTypes.arrayOf(PropTypes.object)
}

