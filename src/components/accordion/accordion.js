import React, { Component } from 'react';
import styles from './accordion.scss';

console.log(styles)

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            open: !state.open
          }));

        console.log('toggle', this.state.open)
    }

    render() {
        return (
            <section className={this.state.open ? 'accordion accordion--open' : 'accordion'} >
                <h1 className="accordion__heading">
                    {this.props.title}
                    <button onClick={this.toggle} className="accordion__toggle">
                        <i className="fas fa-plus accordion__plus"></i>
                        <i className="fas fa-minus accordion__minus"></i>
                        <span className="sr-only">toggle contents</span>
                        +
                    </button>
                </h1>
                <div className="accordion__content">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Accordion
