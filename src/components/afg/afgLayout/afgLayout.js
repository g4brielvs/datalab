import React, { Component } from "react"
import SiteLayout from '../../siteLayout/siteLayout'
import './normalize.css'
import './cg.css'

export default ({ children }) => (
    <SiteLayout>
        <main className="cg-content">
            <div className="ffg-wrapper">
                {children}
            </div>
        </main>
    </SiteLayout>
)