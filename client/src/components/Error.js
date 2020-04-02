import React from 'react';

const Error = (props) => {
    return (
        <div>
            <h3>{props.error.response.status + " " + props.error.response.statusText}</h3>
            <a href="/"><button type="button" class="btn btn-primary"> Leave </button></a>
        </div>
    );
}

export default Error;
