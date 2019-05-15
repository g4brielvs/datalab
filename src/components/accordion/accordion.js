import React, { Component } from 'react';
import styles from './accordion.scss';

console.log(styles)

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            me: 'brett'
        };
    }

    render() {
        console.log(this.state.me)
        return (
            <section className="accordion" >
                <h1 className="accordion__heading">
                    {this.props.title}
                    <button className="accordion__toggle">
                        <i className="fas fa-plus accordion__plus"></i>
                        <i className="fas fa-minus accordion__minus"></i>
                        <span className="sr-only">toggle contents</span>
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
