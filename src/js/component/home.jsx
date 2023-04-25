import React, {useState} from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("green");
	const [showPurpleLight, setShowPurpleLight] = useState(false);


	const toggleDiv = () => {
		setSelectedColor(null);
		setShowPurpleLight(!showPurpleLight);
	}

	const partyLights = () => {
		const originalColor = selectedColor;
		setSelectedColor("red");
		setTimeout(() => setSelectedColor(originalColor), 1000);
	
		setTimeout(() => {
		  setSelectedColor("orange");
		  setTimeout(() => setSelectedColor(originalColor), 1000);
		}, 1000);
	
		setTimeout(() => {
		  setSelectedColor("green");
		  setTimeout(() => setSelectedColor(originalColor), 1000);
		}, 2000);
	}

	return (
		<div className="backImg">
			<div className="stick"></div>
			<div className="trafficLight">
				<div 
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (selectedColor === "red" ? " rglow" : "")
					}></div> 
				<div
					onClick={() => setSelectedColor("orange")} 
					className={
						"light orange" + (selectedColor === "orange" ? " oglow" : "")
					}></div>
				<div 
					onClick={() => setSelectedColor("green")}
					className={
						"light green" + (selectedColor === "green" ? " gglow" : "")
					}></div>
				{showPurpleLight && <div className="light purple"></div>}
			</div>
			<button className="purpleButton" onClick={toggleDiv}>purple surprise!!</button>
			<button className="rainbowButton" onClick={partyLights}>party lights!!</button>
		</div>
	);
};

