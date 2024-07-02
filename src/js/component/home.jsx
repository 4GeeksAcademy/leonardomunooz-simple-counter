import React from "react";
import Counter from "./Counter.jsx"
//create your first component


const Home = () => {
	return (
		<div className="container w-50 bg-dark rounded d-flex flex-wrap align-items-center justify-content-around" style={{ "marginTop": "100px" }}>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={<i class="far fa-clock"></i>} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={0} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={0} />
			</div>
			<div className="container-cards p-4  w-auto h-50">
				<Counter contenido={0} />
			</div>
			<div className="container-cards p-4 w-auto h-50">
				<Counter contenido={1} />
			</div>
		</div>
	);
};

export default Home;
