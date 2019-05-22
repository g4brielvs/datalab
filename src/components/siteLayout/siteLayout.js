import React, { Component } from "react"
import './main.scss';

export default ({ children }) => (
    <>
    <div>Header</div>
    {children}
    <div>Footer</div>
    </>
)
