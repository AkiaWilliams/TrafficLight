import React, { useState } from "react";

const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState("green");
	return (
		<div className="box" style={{ backgroundColor: "black" }}>
			<div className="holder" />
			<div className="red" />
			<div className="yellow" />
			<div className="green" />
		</div>
	);
};
export default TrafficLight;
