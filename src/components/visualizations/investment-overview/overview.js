import React, { useEffect } from 'react';
import * as $ from 'jquery';
import mapboxgl from 'mapbox-gl';
import * as d3 from 'd3';
import { useStaticQuery, graphql } from 'gatsby';
import ShareMenu from '../../share-menu/share-menu';
import './investment.scss';

class InvestmentOverview extends React.Component {
  constructor(props) {
    super(props);
  };

  buildOverview() {
    const contracts = document.getElementById('contracts-bar');
    const grants = document.getElementById('grants-bar');
    const aid = document.getElementById('studentAid-bar');
    const totalinvestment = document.getElementById('investment-bar');

    let totalContracts = 10467392637;
    let totalGrants = 40819465556;
    let totalStudentAid = 98262303519;

    let totalInvestment = totalContracts + totalGrants + totalStudentAid;
    let contractSpendingPercent =  parseInt(((totalContracts/totalInvestment)*100));
    let grantsSpendingPercent = parseInt(((totalGrants/totalInvestment)*100));
    let studentAidSpendingPercent = parseInt(((totalStudentAid/totalInvestment)*100));

    //updatin bar graph to reflect percentages
    contracts.style.width = `${contractSpendingPercent}%`;
    contracts.style.height = '59px';
    contracts.style.backgroundColor = '#925003';
    contracts.style.marginRight = '3px';
    grants.style.width = `${grantsSpendingPercent}%`;
    grants.style.height = '59px';
    grants.style.backgroundColor = '#004C40';
    grants.style.marginRight = '5px';
    aid.style.width = `${studentAidSpendingPercent}%`;
    aid.style.height = '59px';
    aid.style.backgroundColor = '#0A2F5A';
    aid.style.marginRight = '5px';

  }

  componentDidMount() {
    console.log('overview');
  };

  render() {
    return(
    <div id="investment-overview__viz">

      <div id="title-section">
	<p id="chart-title-aid">Student Aid</p>
	<p id="chart-title-grants">Grants</p>
	<p id="chart-title-contracts">Contracts</p>
      </div>

      <div id="investment-chart">
	<div id="studentAid--mobile-title">Student Aid</div>
	<div id="studentAid-bar"><p id="bar-text--aid">$98B</p></div>

	<div id="grants--mobile-title">Grants</div>
	<div id="grants-bar"><p id="bar-text--grants">$41B</p></div>


	<div id="contracts--mobile-title">Contracts</div>
	<div id="contracts-bar"><p id="bar-text--contracts">$10B</p></div>
      </div>

      <div id="investment-subtext">
	<div className="aid-subsection">
	  <p id="aid-heading-aid">
	    Student Aid
	  </p>
	  <div className="aid-image">
	    <img src="/assets/icons/aidv2.svg"/>
	  </div>
	  <p id="aid-description">
	    Federal student aid is financial assistance provided through grants, scholarships, work-study, and loans to students for their educational expenses. This can include costs such as tuition, housing, transportation, books, and supplies. Loans comprise approximately 73% of the total aid to students, making them the largest source of assistance from the federal government.
		  Although student aid includes the $11.6 billion investment made through the <a className="cu-header--red" href="https://www.va.gov/education/about-gi-bill-benefits/" target="_blank">G.I. Bill of Rights</a>, it is not included in this analysis because we were not able to make a direct connection between that investment and the benefits given to an institution.
	  </p>
	</div>
	<div className="aid-subsection">
	  <p id="aid-heading-grants">
	    Grants
	  </p>
	  <div className="aid-image">
	    <img src="/assets/icons/grantsv2.svg"/>
	  </div>
	  <p id="aid-description">
	    A federal grant is an agreement through which a federal agency provides financial assistance to an individual or organization used for projects and expenses that contribute to public good. For example, in 2018, the Department of Commerce funded the University of Maryland, Baltimore County’s (UMBC) research for measuring and improving the robustness of deep learning algorithms.
	  </p>
	</div>
	<div className="aid-subsection">
	  <p id="aid-heading-contracts">
	    Contracts
	  </p>
	  <div className="aid-image">
	    <img src="/assets/icons/contractsv2.svg"/>
	  </div>
	  <p id="aid-description">
	    A federal contract is an agreement in which the federal government purchases a good or service from an organization or individual for government use. 

	    For example, in 2018 the National Aeronautics and Space Administration used a federal contract to pay the California Institute of Technology to operate the Jet Propulsion Laboratory. This laboratory is a center for robotic exploration of the solar system that carries out essential research and tasks like developing a self-directed spacecraft.
	  </p>
	</div>
      </div>
    </div>
    );
  };
};

export default InvestmentOverview;

