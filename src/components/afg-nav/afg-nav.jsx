import React from "react"

import style from './afg-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";


const AfgNav = (props) => {
    let navHtml;
    let navClasses;

    function getFilename(a) {
        return a.match(/.*\/(.*)$/i).pop();
    }

    function setCurrentPageActive() {
        
        var filename = props.location.pathname;
        filename = filename.slice(24);
        filename = filename.slice(0, -1);

        filename = filename || 'revenue-and-gdp';

        var ul = document.getElementsByClassName(style.chapterNavPrimaryList);

        if (!ul.item(0)) {
            return;
        }

        var allSecondaryLi = ul.item(0).children,
            liLength = allSecondaryLi.length;

        if(filename === 'revenue-and-gdp'){
            allSecondaryLi.item(1).classList.add(style.active);
            return true;
        }

        var i = 1;

        for (i; i < liLength; i++) {
            var current = allSecondaryLi.item(i),
                href = getFilename(current.firstChild.href);

            if (filename === href) {
                current.classList.add(style.active);
                break;
            }
        }

        return true;
    }

    function toggleActiveStatus() {
        var element = document.getElementsByClassName(style.chapterNav).item(0),
            openClass = style.menuOpen;

        if (element.classList) { 
            element.classList.toggle(openClass);
        } else {
            // For IE9
            var classes = element.className.split(" ");
            var i = classes.indexOf(openClass);
        
            if (i >= 0) 
                classes.splice(i, 1);
            else 
                classes.push(openClass);
                element.className = classes.join(" "); 
        }

    }

    function initButton() {
        var button = document.getElementsByClassName(style.chapterNavTrigger).item(0);

        button.addEventListener('click', toggleActiveStatus);
    }

    useEffect(
        () => {
            if (setCurrentPageActive()) {
                initButton();
            }
        }
    )

    switch(props.chapter){
        case 'revenue': 
        navClasses = `${style.chapterNav} ${style.chapterNavRevenue}`;
        navHtml = <>
            <li><a href="/americas-finance-guide/revenue-and-gdp">Revenue and GDP</a></li>
            <li><a href="/americas-finance-guide/revenue-categories">Revenue Categories</a></li>
            <li><a href="/americas-finance-guide/revenue-trends">Federal Revenue Trends</a></li>
            <li><a href="/americas-finance-guide/revenue-country-comparison">Country Comparison</a></li>
        </>
            break;
        case 'spending': 
        navClasses = `${style.chapterNav} ${style.chapterNavSpending}`;
        navHtml = <>
            <li><a href="/americas-finance-guide/spending-and-gdp">Spending and GDP</a></li>
            <li><a href="/americas-finance-guide/spending-categories">Spending Categories</a></li>
            <li><a href="/americas-finance-guide/spending-trends">Federal Spending Trends</a></li>
            <li><a href="/americas-finance-guide/spending-country-comparison">Country Comparison</a></li>
        </>
            break;
        case 'deficit': 
        navClasses = `${style.chapterNav} ${style.chapterNavDeficit}`;
        navHtml = <>
            <li><a href="/americas-finance-guide/explore-deficit">Explore Deficit</a></li>
            <li><a href="/americas-finance-guide/deficit-trends">Federal Deficit Trends</a></li>
            <li><a href="/americas-finance-guide/deficit-country-comparison">Country Comparison</a></li>
        </>
            break;
        case 'debt': 
        navClasses = `${style.chapterNav} ${style.chapterNavDebt}`;
        navHtml = <>
            <li><a href="/americas-finance-guide/explore-debt">Explore Debt</a></li>
            <li><a href="/americas-finance-guide/debt-trends">Federal Debt Trends</a></li>
            <li><a href="/americas-finance-guide/debt-analysis">Federal Debt Analysis</a></li>
            <li><a href="/americas-finance-guide/debt-country-comparison">Country Comparison</a></li>
        </>
            break;
        default:
            break;
    }

    return ( 
    <nav className={navClasses}>
        <ul className={style.chapterNavPrimaryList}>
            <li className={style.chapterNavOverview}><a href="/americas-finance-guide/overview"><FontAwesomeIcon icon={faAngleLeft} className="fas fa-chevron-left"/> Overview</a></li>
            {navHtml}
        </ul>
        <button className={style.chapterNavTrigger}>
            <FontAwesomeIcon icon={faAngleDown} className="fas fa-lg fa-angle-down menu-down"/>
            <FontAwesomeIcon icon={faAngleUp} className="fas fa-lg fa-angle-up menu-up"/>
        </button>
    </nav>
    )
}


export default AfgNav;
