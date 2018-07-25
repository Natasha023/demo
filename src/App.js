import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './component/weather'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      lat : -33,
      lon : 151,

      weather : {
        type : 'c',
        wind : true,
        deg : 0,
        weatherName : '',
        speed : '0',
        title : 'title of widget'
      }

    }
  }

  handleChangeTmp(val){
    let deg = this.state.weather.deg;
    this.setState({
      weather: Object.assign(this.state.weather , {type : val , deg : val === 'f' ? (deg*(9/5)+32).toFixed(1) : ((5/9)*(deg-32)).toFixed(1)})
    })
  }

  handleWind(val){
    this.setState({
      weather: Object.assign(this.state.weather , {wind : val})
    })
  }

  handleInput(event){
    this.setState({
      weather: Object.assign(this.state.weather , {title : event.target.value})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="progress">

        </div>
        <span className="center-line">

        </span>
        <div className="left">
          <h3>Title</h3>
          <input onInput={this.handleInput.bind(this)} className="ipt-text" type="text" placeholder="Title of widget" />
          <h3>Temperature</h3>
          <input defaultChecked id="c" onChange={()=>this.handleChangeTmp('c')} value="c" name="temperature" type="radio" />
          <label className="label-tem" htmlFor="c">C</label>
          <input id="f" value="f" onChange={()=>this.handleChangeTmp('f')} name="temperature" type="radio" />
          <label className="label-tem" htmlFor="f">F</label>

          <h3>Wind</h3>
          <input value="on" onChange={()=>this.handleWind(true)} defaultChecked id="on" name="wind" type="radio" />
          <label htmlFor="on">On</label>
          <input value="off" onChange={()=>this.handleWind(false)} id="off" name="wind" type="radio" />
          <label htmlFor="off">Off</label>

        </div>
        <div className="right">

          <Weather weather={this.state.weather} />

        </div>
      </div>
    );
  }

  translatePoint(p){

  }

  getWeatherDada(zip , country){

  }

  componentWillMount(){

  }

  componentDidMount(){

    var self = this;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(p){
        console.log(p);
        if(p && p.coords && p.coords.latitude){

          self.setState({
            lat : p.coords.latitude,
            lon : p.coords.longitude
          })
        }else{
          console.log('can not get position')
        }
      });
    }else{
      console.log('can not get position')
    }

    axios.get('http://api.openweathermap.org/data/2.5/weather', {params : {
          lat : this.state.lat,
          lon: this.state.lon ,
          appid: 'cd8ab128bc562aa94e9147cfb3e89b0d'
    }}).then(function (response) {
          console.log(response);
          if(response.data && response.data.weather){
            self.setState({
              weather: Object.assign(self.state.weather , {weatherName : response.data.name})
            })
          }

          if(response.data && response.data.wind){
            self.setState({
              weather: Object.assign(self.state.weather , {deg : ((5/9)*(response.data.main.temp-32)).toFixed(1) , speed : response.data.wind.speed})
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}

export default App;
