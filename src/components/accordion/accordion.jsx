/*
	Text and UL-only accordion variant
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './accordion.module.scss';

export default class AccordionList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			closed: true
		};

		this.toggle = this.toggle.bind(this);
	}

  /* props notes
    title: shows in the top box, collapsed or open
    color: theme color for border, collapsed background, and highlighted text within
    backgroundColor: background of collapsed box
  */
	static propTypes = {
		'title': PropTypes.string.isRequired,
		'color': PropTypes.string,
		'backgroundColor': PropTypes.string
	};

	toggle = e => {
		e.stopPropagation();
		this.setState(state => ({ closed: !state.closed }));
	}

	styleOverrides = () => {
		const calcStyles = {};
		if (this.props.color) {
			calcStyles.color = this.props.color;
		}
		if (this.state.closed && this.props.backgroundColor) {
			calcStyles.backgroundColor = this.props.backgroundColor;
		}
		return calcStyles;
	}

	render = () => (
		<div className={this.props.containerClass ? this.props.containerClass : styles.container}>
			<div className='row'>
				<div className='col-xs-12'>
					<section
						className={`${styles.accordion} ${this.state.closed ? styles.closed : styles.accordion}`}
						style={this.props.color ? { 'borderColor': this.props.color } : {}}
					>
						<h1
							onClick={this.toggle}
							className={styles.heading}
							style={this.styleOverrides()}
						>
							{this.props.title}
							<button onClick={this.toggle} className={styles.toggle} aria-label='show or hide details'>
								<span className={styles.expandIcon} style={this.props.color ? { 'color': this.props.color } : {}} >
									{this.state.closed ? '+' : '\u2013'}
								</span>
							</button>
						</h1>
						<div className={styles.content}>
							{this.props.children}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
