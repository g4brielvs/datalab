import React from 'react';
import PropTypes from 'prop-types';
import styles from './toc.module.scss';


const Toc = ({sections}) => {
	return (
		<>
      <section id={styles.TOC}>
        <div className="row center-md center-sm">
          <div className="col-lg-10 col-sm-9 col-xs-9">
            <div className="row center-md center-sm">
              {sections.map((item, key) =>
                  <div key={key} className={`col-lg-3 col-md-6 col-xs-12 ${styles.tile}`}>
                    <a href={`#section-${item.section}`}>
                      <div className="row">
                        <span className={`${styles.number} col-xs-2 col-sm-2 col-md-4`}>
                          <h2>{item.number}</h2>
                        </span>
                        <span className={`${styles.section} col-xs-10 col-sm-10 col-md-8`}>{item.section}</span>
                      </div>
                      <div className={styles.subtitle}>{item.subblurb}</div>
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

