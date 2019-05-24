import React, { Component } from "react"
import './main.scss';
import SiteFooter from "../footer/footer";
import SiteHeader from "../siteHeader/header";

export default ({ children }) => (
    <>
        <SiteHeader />
        <article id="main">
        {children}
        </article>
        <SiteFooter />
    </>
)
