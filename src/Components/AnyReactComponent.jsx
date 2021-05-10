import React from 'react';

function AnyReactComponent({ text }) {
    return (
        <div>{text}</div>
    );
}

export default React.memo(AnyReactComponent);