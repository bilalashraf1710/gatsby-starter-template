import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import DocLinkList from "../components/home/documentation/DocLinkList";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#663399",
}

const docLinks = [
    {
        text: "TypeScript Documentation",
        url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
        color: "#8954A8",
    },
    {
        text: "GraphQL Typegen Documentation",
        url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
        color: "#8954A8",
    }
]


const IndexPage: React.FC<PageProps> = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>
                Congratulations
                <br/>
                <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
            </h1>
            <DocLinkList docLinks={docLinks}/>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
