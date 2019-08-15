import React from 'react';
import './toc.scss';

const Toc = (props) => (
  <div className="TOC container">
		<div className="row center-lg">
			<div className="col-lg-10">
				<section id="TOC">
					<div className="row">
						{
							props.sections.map((item, key) =>
								<div key={key} className="col-lg-3 col-md-6 col-xs-12 toc__tile">
									<a href={`#section-${item.section}`}>
										<div className="toc__number">
											<h2>
												{item.number}
											</h2>
										</div>
										<h4 className="toc__subtext">
											{item.subtext}
										</h4>
										<h3 className="toc__subblurb">
											{item.subblurb}
										</h3>

										<p className="toc__blurb">
											{item.blurb}
										</p>
									</a>
								</div>
							)
						}
					</div>
				</section>
			</div>
		</div>
	</div>
)


export default Toc;