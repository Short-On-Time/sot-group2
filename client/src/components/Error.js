import React from 'react';

const Error = (props) => {
    try{
    return (
		<div>
			<h3>{props.error.response.status + " " + props.error.response.statusText}</h3>
			<a href="/"><button type="button" className="btn btn-primary">Leave</button></a>
		</div>
    );
    }
    catch(error){
        return(
            <div>
                <h3>An error has occured</h3>
                <a href="/"><button type="button" className="btn btn-primary">Leave</button></a>
            </div>
        );
    }
}

export default Error;
