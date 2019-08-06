import React, { Component } from 'react';
import styles from './accordion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        e.stopPropagation();
        
        this.setState(state => ({
            open: !state.open
          }));
    }

    render() {
        return (
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10">
                <section className={this.state.open ? 'accordion accordion--open' : 'accordion'} >
                  <h1 onClick={this.toggle} className="accordion__heading">
                    {this.props.title}
                    <button onClick={this.toggle} className="accordion__toggle">
                      <FontAwesomeIcon icon={faPlus} className="accordion__plus" />
                      <FontAwesomeIcon icon={faMinus} className="accordion__minus" />
                      <span className="sr-only">toggle contents</span>
                    </button>
                  </h1>
                  <div className="accordion__content">
                    {this.props.children}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )
    }
}

export default Accordion
