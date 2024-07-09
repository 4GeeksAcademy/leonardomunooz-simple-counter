//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";

// //render your react application

    let seconds = 0;
    let counterMinutes = 9;
    let counterHours = 9;
    let counterDays = 0;

const root = ReactDOM.createRoot(document.querySelector('#app'));

setInterval(() => {
    seconds++;
    if (seconds === 10) { 
        counterMinutes = counterMinutes + 1;
        seconds = 0;
    }
    if (counterMinutes === 10) {
        counterHours = counterHours + 1;
        counterMinutes = 0;
    }
    if (counterHours === 10) {
        counterDays = counterDays + 1;
        counterHours = 0;
    }
    root.render( 
    <Home 
        seconds ={seconds}
        minutes ={counterMinutes}
        hours ={counterHours}
        days ={counterDays}
/>);
}, 1000);

