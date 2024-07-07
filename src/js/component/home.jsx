import React from "react";
import Counter from "./Counter.jsx";
//create your first component
let seconds = 0;
let counterMinutes = 0;
let counterHours = 0;
let counterDays = 0;


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
  console.log(`${counterHours}:${counterMinutes}: ${seconds}`);


const Home = () => {
	return (
		<div className="container w-50 bg-dark rounded d-flex flex-wrap align-items-center justify-content-around" style={{ "marginTop": "100px" }}>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={<i class="far fa-clock"></i>} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={seconds} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={counterMinutes} />
			</div>
			<div className="container-cards p-4  w-auto h-50">
				<Counter contenido={counterHours} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={counterDays} />
			</div>
		</div>
	);
};

export default Home;
