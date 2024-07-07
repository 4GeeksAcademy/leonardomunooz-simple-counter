import PropTypes from "prop-types";
import React from "react";

const Counter = (props) => {
    return (
        <>
           <div>
              <p className="text-light display-3 fw-bolder">{props.contenido} </p>
           </div>
        </>
    )
}

Counter.prototype = {
    contenido:PropTypes.string,
    sg :PropTypes.string,
    min:PropTypes.string,
    hr : PropTypes.string,
    D  : PropTypes.string
}

export default Counter;
