import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function getTimeString() {
	const now = new Date();
	const stringTime = format(now, "hh : mm : ss a : (EEEE) d, MMMM, yyyy");
	return stringTime;
} //defined globally instead of in App() to prevent React from remaking it continually

function App() {
	const [time, setTime] =
		useState(getTimeString); /*Set up a time value to be read and an 
  automatically made resetter for time using React */

	useEffect(() => {
		//React runs the contents when the App is loaded, then saves the return function

		const interval = setInterval(() => {
			setTime(getTimeString());
		}, 1000); // Interval to update the time every second

		return () => {
			//The return is used as a function after the dependancy changed
			clearInterval(interval);
		};
	}, []); //[] means that there is no dependancy, therefore, the return is resolved only on unmount (when React stops using App)

	return (
		<>
			<h2>{time}</h2>
			{/*display the time dynamically using React */}
		</>
	);
}

export default App;
