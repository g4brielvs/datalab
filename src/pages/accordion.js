import React from "react"
import Layout from "../layouts/default/layout"
import Accordion from '../components/accordion/accordion'

const AccordionPage = () => (
    <Layout>
        <h1>Accordion Example</h1>
        <Accordion
            title="Accordion Title">
            <p>I am an accordion with lots to say.</p>
            <p>I have several paragraphs...</p>
            <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
        </Accordion>
    </Layout>
)

export default AccordionPage
