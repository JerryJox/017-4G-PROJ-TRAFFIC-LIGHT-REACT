import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[ selectedColor, setSelectedColor] = useState("red");
	return (
		<div classNameName="trafficLight">
			<div className="light red glow"></div>
			<div className="light orange"></div>
			<div className="light green"></div>
		</div>
	);
};

export default Home;
