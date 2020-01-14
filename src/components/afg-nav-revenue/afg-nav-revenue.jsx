import React from "react"

import style from './afg-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";


const AfgNavRevenue = (props) => {
    let navHtml;
    let navClasses;
    function getFilename(a) {
        return a.match(/.*\/(.*)$/i).pop();
    }

    function setCurrentPageActive() {
        
        var filename = getFilename(props.location.pathname);

        filename = filename || '/americas-finance-guide/revenue-and-gdp';

        console.log('filename', filename);

        console.log('style.chapterNavPrimaryList', style.chapterNavPrimaryList);

        var ul = document.getElementsByClassName(style.chapterNavPrimaryList);

        console.log('ul', ul);

        if (!ul.item(0)) {
            console.log('empty return');
            return;
        }

        var allSecondaryLi = ul.item(0).children,
            liLength = allSecondaryLi.length;

        if(filename === '/americas-finance-guide/revenue-and-gdp'){
            console.log('adding active');
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


export default AfgNavRevenue;
