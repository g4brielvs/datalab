import React from "react"
import './main.scss';
import SiteFooter from "../footer/footer";
import SiteHeader from "../siteHeader/header";
import Helmet from 'react-helmet'

export default ({ children }) => (
    <>
        <Helmet>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Helmet>

        <SiteHeader />
        <article id="main">
            {children}
        </article>
        <SiteFooter />
    </>
)
