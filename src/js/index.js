//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";

// //render your react application
    let seconds = 0;
    let counterMinutes = 0;
    let counterHours = 0;
    let counterDays = 0;

const root = ReactDOM.createRoot(document.querySelector('#app'));


setInterval(() => {
    seconds++;
    if (seconds === 60) { 
        counterMinutes = counterMinutes + 1;
        seconds = 0;
    }
    if (counterMinutes === 60) {
        counterHours = counterHours + 1;
        counterMinutes = 0;
    }
    if (counterHours === 24) {
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

