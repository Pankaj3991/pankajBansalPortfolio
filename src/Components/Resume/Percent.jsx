import React from 'react';
import "./Percent.scss";

const Percent = (props) => {
  // const progress = {
  //   'to': { strokeDashoffset:"70" }
  // };

  // const animated = {
  //   strokeDasharray: "325",
  //   strokeDashoffset: "325",
  //   // animation: `${progress} 2s linear forwards`
  //   animationName:progress,
  //   animationDuration:"2s",
  //   animationFunction:"linear"
  // }

  return (
      <div className="cardSkill">
          <h1>{props.percent}%</h1>
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="progress-ring-circle2"
              stroke="#c7fea5" // Change this to your desired progress color
              strokeWidth="8"
              fill="transparent"
              r="52"
              cx="60"
              cy="60"
              
            />

            <circle
              className="progress-ring-circle"
              stroke="blue" // Change this to your desired progress color
              strokeWidth="8"
              fill="transparent"
              r="52"
              cx="60"
              cy="60"

              style={{
                "--radius": `${props.percent}`
              }}
            />
          </svg>
          <h2>{props.title}</h2>
        </div>
  )
}

export default Percent
