// eslint-disable-next-line no-unused-vars
import React from "react"

function WeatherForecast({ forecast }) {
  if (!forecast) return null

  return (
    <section>
      <div className="weather">
        <h2>{forecast.day}</h2>
        <img src={forecast.img} alt={forecast.imgAlt} />
        <p>
          <span>conditions: </span>
          {forecast.conditions}
        </p>
        <p>
          <span>time: </span>
          {forecast.time}
        </p>
      </div>
    </section>
  )
}

export default WeatherForecast
