import React, { FC } from "react";
import {DocumentationLink} from "../../../types/documentation";
import {docLinkStyle, linkStyle} from "./styles";

interface DocLinkProps {
    doc: DocumentationLink
}

const DocLink:FC<DocLinkProps> = ({doc}) => <li key={doc.url} style={docLinkStyle}>
    <a
        style={linkStyle}
        href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
    >
        {doc.text}
    </a>
</li>

export default DocLink