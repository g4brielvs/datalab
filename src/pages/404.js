import React from 'react';
import './404.scss';

import HeaderOnly from '../components/layouts/header-only/header-only';
import SEO from '../components/seo';

const NotFoundPage = () => {
	const browser = typeof window !== `undefined`;

	if (browser && window.location.href.indexOf('.html') > -1) {
		const href = window.location.href;
		const urlFrags = href.split('?');

		if(urlFrags.length > 1 && urlFrags[0].slice(-1) == '/') {
			urlFrags[0] = urlFrags[0].slice(0, -1);
		}

		if (urlFrags[0].slice(-5) == '.html') {
			urlFrags[0] = urlFrags[0].slice(0, -5);
		}

		window.location = urlFrags[0] + '/' + (urlFrags.length > 1 ? '?' + urlFrags[1] : '');

		return <></>;

	} else {
		return (
			browser && <HeaderOnly _containerClass='four-oh-four' _headerClass='four-oh-four__header'>
				<SEO title='404: Not found'/>
				<div id='four-oh-four'>
					<div className='four-container'>
						<h1>Oops!</h1>
						<h4>Looks like you got lost in the data.
							<div><span>It happens.</span> Find your way back.</div>
						</h4>
						<div id='btn-container'>
							<div id='back-btn'><a href='/'>BACK</a></div>
							<div id='home-btn'><a href='/'>HOME</a></div>
						</div>
					</div>
				</div>
			</HeaderOnly>
		)
	}
};

export default NotFoundPage;
