import React from "react";

const Counter = (props) => {
    return (
        <>
           <div className="container-cards p-4 w-auto h-50">
				<p className="text-light display-3 fw-bolder">{props.content}</p>
			</div>
        </>
    )
}
export default Counter;
