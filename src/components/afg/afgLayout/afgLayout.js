import React, { Component } from "react"
import SiteLayout from '../../siteLayout/siteLayout'
import ChapterNav from "../chapterNav/chapterNav";
import './normalize.css'
import './cg.css'

class AfgLayout extends Component {
    render() {
        const { chapter, children } = this.props;

        return (
            <SiteLayout>
                <main className="cg-content">
                    <ChapterNav chapter={chapter}></ChapterNav>
                    <div className="ffg-wrapper">
                        {children}
                    </div>
                </main>
            </SiteLayout>
        )
    }
}

export default AfgLayout