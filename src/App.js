import React, { useState } from 'react';

const App = () => {

  const [temperatureColor, setTemperatureColor] = useState('cold');
  const [temperatureValue, setTemperatureValue]  = useState(10);

  const increaseTemperature = () => {
	const newTemperature = temperatureValue + 1
	setTemperatureValue(newTemperature);

	if (newTemperature >= 15){
		setTemperatureColor('hot');
	}

	if (newTemperature >= 30){
		setTemperatureValue(30);
	}
};

  const decreaseTemperature = () => {
	const newTemperature = temperatureValue - 1;
	setTemperatureValue(newTemperature);

	if (newTemperature < 15){
		setTemperatureColor('cold');
	}

	if (newTemperature <= 0){
		setTemperatureValue(0);
	}
};

	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseTemperature}>+</button>
				<button onClick={decreaseTemperature} >-</button>
			</div>
		</div>
	);
};

export default App;