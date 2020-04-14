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

		this.id = Math.random().toString(36).substring(7); //unique ID to select content
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
		// setTimeout(
		// 	() => document.getElementById(this.id).style.display = this.state.closed ? 'none' : 'block'
		// 	, 500
		// );
		document.getElementById(this.id).style.height = this.state.closed ? 0 : 'auto'
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
		<div className={styles.container}>
			<section
				className={`${styles.accordion} ${this.state.closed ? '' : styles.open}`}
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
				<div id={this.id} className={styles.content}>
					{this.props.children}
				</div>
			</section>
		</div>
	);
}
