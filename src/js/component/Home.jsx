import React from "react";
import Counter from "./Counter.jsx";
//create your first component



const Home = (props) => {
	return (
		<div className="container w-50 bg-dark rounded d-flex flex-wrap align-items-center justify-content-around" style={{ "marginTop": "100px" }}>
			<Counter content={<i class="far fa-clock"></i>} />
			<Counter content={props.days + "d"}/>
			<Counter content={props.hours + "h" } />
			<Counter content={props.minutes + "m"}/>
			<Counter content={props.seconds + "s"}/>
		</div>
	);
};

export default Home;
