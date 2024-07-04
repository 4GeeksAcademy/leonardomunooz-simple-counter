import React from "react";
import Counter from "./Counter.jsx"
import PropTypes from "prop-types";
import simple from "../simple.js";

//create your first component

let seconds = 0;
let counterMinutes = 0;
let counterHours = 0
let counterDays = 0;

setInterval(function(props) {
	        console.log(seconds = seconds + 1);
	          if(seconds == 60){
	            counterMinutes = counterMinutes + 1 ;
	            console.log("minutos: " + counterMinutes);
	            seconds = 0;
	        }
	},1000);

const Home = () => {
	return (
		<div className="container w-50 bg-dark rounded d-flex flex-wrap align-items-center justify-content-around" style={{ "marginTop": "100px" }}>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={<i class="far fa-clock"></i>} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={counterDays}  />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={counterHours} />
			</div>
			<div className="container-cards p-4  w-auto h-50">
				<Counter contenido={counterMinutes} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={seconds} />
			</div>
		</div>
	);
};

export default Home;
