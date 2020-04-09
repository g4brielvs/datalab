import React from 'react';
import { Grid, Hidden } from "@material-ui/core";
import { Link } from 'gatsby';

import secondaryAnalysesTileStyles from './secondary-tile.module.scss';
import PropTypes from "prop-types";

const SecondaryTile = (props) => {
	return (
		<section className={secondaryAnalysesTileStyles.highlight}>
			<Link
				to={props.href}
				className={secondaryAnalysesTileStyles.highlightLink}
				ga-on='click' ga-event-category='Data Lab Home Page'
				ga-event-action={'Clicked ' + props.heading}
			>

				<Hidden mdDown>
					<Grid container spacing={3}>
						<Grid item className={secondaryAnalysesTileStyles.headings}>
							<p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
							<p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
						</Grid>
						<Grid item>
							<img
								style={{ width: '100%' }}
								data-src={props.imgSrc}
								className='lazyload'
								role='presentation'
							/>
						</Grid>
						<Grid item>
							<p className={secondaryAnalysesTileStyles.text}>
								{props.body}
							</p>
						</Grid>
					</Grid>
				</Hidden>
				<Hidden lgUp>
					<Grid container spacing={3}>
						<Grid item xs={6} className={secondaryAnalysesTileStyles.headings}>
							<p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
							<p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
							<p className={secondaryAnalysesTileStyles.text}>
								{props.body}
							</p>
						</Grid>
						<Grid item xs={6}>
							<img
								style={{ width: '100%' }}
								data-src={props.imgSrc}
								className='lazyload'
								alt={props.imgAlt}
							/>
						</Grid>
					</Grid>
				</Hidden>
			</Link>
		</section>
	);
}

export default SecondaryTile;

SecondaryTile.propTypes = {
	href: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
}
