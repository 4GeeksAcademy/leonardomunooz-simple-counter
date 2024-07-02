import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
    return (
        <>
           <div>
              <p className="text-light display-3 fw-bolder">{props.contenido}</p>
           </div>
        </>
    )
}

Counter.prototype = {
    contenido:PropTypes.string,
}

export default Counter;
