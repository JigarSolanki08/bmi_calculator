import React from 'react';
import { useMemo, useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  const onweightchange = (event) => {
    setWeight(Number(event.target.value));
  };
  const onheightchange = (event) => {
    setHeight(Number(event.target.value));
  };
  const output = useMemo(() => {
    const caclheight = height / 100;
    return (weight / (caclheight * caclheight)).toFixed(1);
  }, [height, weight]);
  const getBmiCategory = () => {
    if (output < 18.5) {
      return "Underweight";
    } else if (output >= 18.5 && output < 24.9) {
      return "Normal Weight";
    } else if (output >= 25 && output < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };
  return (
    <>
    <h1>BMI CALCULATOR</h1>
      <div className="input-field">
        <div className="slider-input">
          <p className="slider-output">Weight:{weight} kg</p>
          <input
            type="range"
            min="40"
            max="200"
            step="1"
            onChange={onweightchange}
          />
        </div>
        <div className="slider-input">
          <p className="slider-output">Height:{height} m</p>
          <input
            type="range"
            min="100"
            max="200"
            step="1"
            onChange={onheightchange}
          />
        </div>
        <div className="result-box">
          <h3>Your BMI is:{output}</h3>
          <h3>Category:{getBmiCategory()}</h3>
        </div>
      </div>
    </>
  )
}

export default Bmi