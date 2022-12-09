import React, {FC} from 'react'
import {DocumentationLink} from "../../../types/documentation";
import DocLink from "./DocLink";
import {doclistStyles} from "./styles";

interface DocLinkListProps {
    docLinks: DocumentationLink[]
}

const DocLinkList: FC<DocLinkListProps> = ({docLinks}) => <ul style={doclistStyles}>
    {docLinks.map(doc => (
        <DocLink doc={doc}/>
    ))}
</ul>

export default DocLinkList