import React from 'react';
import {CATALOG} from "../../router/url";
import {Link} from "react-router-dom";

function FooterCategory(props) {
    const {title, url, id} = props
    return (
        <li key={id} className="p-b-9">
            <Link
                to={`${CATALOG}/${url}`}
                className="s-text7"
                style={{textTransform: "capitalize"}}
            >
                {title}
            </Link>
        </li>
    );
}

export default React.memo(FooterCategory);