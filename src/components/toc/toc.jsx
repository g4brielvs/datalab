import React from 'react';
import PropTypes from 'prop-types';
import './toc.scss';


const Toc = ({sections}) => {
	return (
		<>
      <section id="TOC">
        <div className="row center-lg">
          <div className="col-lg-10">
            <div className="row center-lg">
              {sections.map((item, key) =>
                  <div key={key} className="col-lg-3 col-md-6 col-xs-12 toc__tile">
                    <a href={`#section-${item.section}`}>
                    <div className="toc__number">
                      <h2> {item.number} </h2>
                    </div>
                    <h4 className="toc__subtext"> {item.subtext} </h4>
                     <h3 className="toc__subblurb"> {item.subblurb} </h3>

                    <p className="toc__blurb"> {item.blurb} </p>
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

