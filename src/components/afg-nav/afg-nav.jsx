import React, { useEffect } from "react"
import { Link } from 'gatsby';

import style from './afg-nav.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


const AfgNav = (props) => {
    let navHtml;
    let navClasses;

    function getFilename(a) {
        return a.match(/.*\/(.*)$/i).pop();
    }

    function setCurrentPageActive() {

        var filename = props.location.pathname;
        filename = filename.slice(24);

        if(filename.slice(-1) === '/'){
            filename = filename.slice(0, -1);
        }

        filename = filename || 'revenue';

        var ul = document.getElementsByClassName(style.chapterNavPrimaryList);

        if (!ul.item(0)) {
            return;
        }

        var allSecondaryLi = ul.item(0).children,
            liLength = allSecondaryLi.length;

        if(filename === 'revenue'){
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
        // For IE9
        function toggleClass(el, className){
            var classes = el.className.split(" ");
            var i = classes.indexOf(className);

            if (i >= 0) {
                classes.splice(i, 1);
            }
            else {
                classes.push(openClass);
            }

            element.className = classes.join(" ");
        }

        var element = document.getElementsByClassName(style.chapterNav).item(0),
            toggleIcons = document.getElementsByClassName(style.chapterNavTrigger).item(0).getElementsByTagName('svg'),
            hiddenClass = 'hidden',
            openClass = style.menuOpen;

        if (element.classList) {
            element.classList.toggle(openClass);
            for(let i = toggleIcons.length; i--;){
                toggleIcons[i].classList.toggle(hiddenClass)
            }
        } else {
            toggleClass(element, openClass);
            for(let i = toggleIcons.length; i--;){
                toggleClass(toggleIcons[i], hiddenClass)
            }
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
            <li><Link to={"/americas-finance-guide/revenue/"}>Revenue and GDP</Link></li>
            <li><Link to={"/americas-finance-guide/revenue/categories/"}>Revenue Categories</Link></li>
            <li><Link to={"/americas-finance-guide/revenue/trends/"}>Federal Revenue Trends</Link></li>
            <li><Link to={"/americas-finance-guide/revenue/country-comparison/"}>Country Comparison</Link></li>
        </>
            break;
        case 'spending':
        navClasses = `${style.chapterNav} ${style.chapterNavSpending}`;
        navHtml = <>
            <li><Link to={"/americas-finance-guide/spending/"}>Spending and GDP</Link></li>
            <li><Link to={"/americas-finance-guide/spending/categories/"}>Spending Categories</Link></li>
            <li><Link to={"/americas-finance-guide/spending/trends/"}>Federal Spending Trends</Link></li>
            <li><Link to={"/americas-finance-guide/spending/country-comparison/"}>Country Comparison</Link></li>
        </>
            break;
        case 'deficit':
        navClasses = `${style.chapterNav} ${style.chapterNavDeficit}`;
        navHtml = <>
            <li><Link to={"/americas-finance-guide/deficit/"}>Explore Deficit</Link></li>
            <li><Link to={"/americas-finance-guide/deficit/trends/"}>Federal Deficit Trends</Link></li>
            <li><Link to={"/americas-finance-guide/deficit/country-comparison/"}>Country Comparison</Link></li>
        </>
            break;
        case 'debt':
        navClasses = `${style.chapterNav} ${style.chapterNavDebt}`;
        navHtml = <>
            <li><Link to={"/americas-finance-guide/debt/"}>Explore Debt</Link></li>
            <li><Link to={"/americas-finance-guide/debt/trends/"}>Federal Debt Trends</Link></li>
            <li><Link to={"/americas-finance-guide/debt/analysis/"}>Federal Debt Analysis</Link></li>
            <li><Link to={"/americas-finance-guide/debt/country-comparison/"}>Country Comparison</Link></li>
        </>
            break;
        default:
            break;
    }

    return (
    <nav className={navClasses}>
        <ul className={style.chapterNavPrimaryList}>
            <li className={style.chapterNavOverview}><Link to={"/americas-finance-guide/"}><FontAwesomeIcon icon={faAngleLeft} className="fas fa-chevron-left" width={16} /> Overview</Link></li>
            {navHtml}
        </ul>
        <button className={style.chapterNavTrigger}>
            <FontAwesomeIcon icon={faAngleDown} className="fas fa-lg fa-angle-down menu-down"/>
            <FontAwesomeIcon icon={faAngleUp} className="fas fa-lg fa-angle-up menu-up hidden"/>
        </button>
    </nav>
    )
}


export default AfgNav;
