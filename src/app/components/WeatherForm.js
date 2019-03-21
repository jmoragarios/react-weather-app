import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input
                autoFocus
                className="form-control"
                name="city"
                placeholder="Your City Name"
                type="text"
                />
            </div>
            <div className="form-group">
                <input
                className="form-control"
                name="country"
                placeholder="Your Country"
                />
            </div>
            <button className="btn btn-success btn-block">
            Get Weather
            </button>
        </form>
    </div>
)

export default WeatherForm;