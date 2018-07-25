
import React, { Component } from 'react';
class Weather extends Component{

  constructor(props){
    super(props);
    this.state = {};
    console.log(this.props);
    this.state = Object.assign({}, this.props);
  }

  render(){

    return (
        <div className="weather">
          <h3 className="tit-name">{this.state.weather.title.toUpperCase()}</h3>
          <div className="weather-main">
            <div className="icon">
                   <span className="sun">

                   </span>
              <span className="wind" style={{'display' : this.state.weather.wind ? 'block' : 'none'}}>

                   </span>
            </div>

            <div className="detail">
              <span className="wea-name">{this.state.weather.weatherName}</span>
              <i className="wea-deg">{this.state.weather.deg}</i>
              <span className="wea-wind"><b>Wind</b> NE {this.state.weather.speed} km/h</span>
            </div>
          </div>
        </div>
    )
  }
}

export default Weather;