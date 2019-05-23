import React, { Component } from "react"
import './main.scss';
import SiteFooter from "../footer/footer";

export default ({ children }) => (
    <>
        <div>Header</div>
        {children}
        <SiteFooter />
    </>
)
