import React from "react"
import Home from "../../layouts/home/home"
import Accordion from '../../components/page-parts/accordion/accordion'

const AccordionPage = () => (
    <Home>
        <h1>Accordion Example</h1>
        <Accordion
            title="Accordion Title">
            <p>I am an accordion with lots to say.</p>
            <p>I have several paragraphs...</p>
            <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
        </Accordion>
    </Home>
)

export default AccordionPage
