import React, { Component } from 'react';
import './nav.css';

class ChapterNav extends Component {
    render() {
        const button = (
            <button className="chapter-nav-trigger">
                <i className="fas fa-lg fa-angle-down menu-down"></i>
                <i className="fas fa-lg fa-angle-up menu-up"></i>
            </button>
        )

        if (this.props.chapter === 'revenue') {
            return (
                <nav className="chapter-nav chapter-nav--revenue">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><i className="fas fa-chevron-left"></i> Overview</a></li>
                        <li><a href="/americas-finance-guide/revenue/">Revenue and GDP</a></li>
                        <li><a href="/americas-finance-guide/revenue/categories/">Revenue Categories</a></li>
                        <li><a href="/americas-finance-guide/revenue/trends/">Federal Revenue Trends</a></li>
                        <li><a href="/americas-finance-guide/revenue/country-comparison/">Country Comparison</a></li>
                    </ul>
                    { button }
                </nav>
            )
        }

        if (this.props.chapter === 'spending') {
            return (
                <nav className="chapter-nav chapter-nav--spending">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><i className="fas fa-chevron-left"></i> Overview</a></li>
                        <li><a href="./">Spending and GDP</a></li>
                        <li><a href="./categories.html">Spending Categories</a></li>
                        <li><a href="./trends.html">Federal Spending Trends</a></li>
                        <li><a href="./country-comparison.html">Country Comparison</a></li>
                    </ul>
                    { button }
                </nav>
            )
        }

        if (this.props.chapter === 'deficit') {
            return (
                <nav className="chapter-nav chapter-nav--deficit">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><i className="fas fa-chevron-left"></i> Overview</a></li>
                        <li><a href="./">Explore Deficit</a></li>
                        <li><a href="./trends.html">Federal Deficit Trends</a></li>
                        <li><a href="./country-comparison.html">Country Comparison</a></li>
                    </ul>
                    { button }
                </nav>
            )
        }

        return (
            <nav className="chapter-nav chapter-nav--debt">
                <ul className="chapter-nav__primary-list">
                    <li className="chapter-nav__overview"><a href="../"><i className="fas fa-chevron-left"></i> Overview</a></li>
                    <li><a href="./">Explore Debt</a></li>
                    <li><a href="./trends.html">Federal Debt Trends</a></li>
                    <li><a href="./analysis.html">Federal Debt Analysis</a></li>
                    <li><a href="./country-comparison.html">Country Comparison</a></li>
                </ul>
                { button }
            </nav>
        )
    }
}

export default ChapterNav
