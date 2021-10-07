import React,{useState,useEffect} from 'react';

import WeatherData from './services/forecast';
import { Weather as WeatherInfo } from './services/forecast';

import './App.css';



function App() {

  const [cityName,setCityName]=useState<string>('')
  const [weather,setWeather]=useState<WeatherInfo[]>([])
  const handleChange=(e:any):void=>{
      setCityName(e.target.value)
  } 

  const handleSubmit=(e:any):void=>{ 
      e.preventDefault()
      if(cityName.length===0){
        alert('Please enter the name of a city.')
      }else{
        console.log('Submit button triggered')
        console.log(cityName)
        //trigger service here
        WeatherData(cityName).then((res):void=>{
          console.log(res)
          let future_temperature = res.list[5].main
          let future_weather  = res.list[5].weather[0].main
          setWeather(weather.concat(
            {
              city:cityName,
              temperature:future_temperature,
              weather:future_weather
            }
          ))
        }).catch((err:any)=>{
          console.log(err)
        })
      }
  }

  return (
    <div className="App">
      <h1>Weather Tracker</h1>
      <div className='search-panel'>  
          <form className='class-panel-form' onSubmit={(e):void=>handleSubmit(e)}>
            <label>City Name:</label>
            <input type='text'placeholder='Enter City Name Here' onChange={(e)=>handleChange(e)}></input>
            <button>Add</button>
          </form>
      </div>
      {/* listed by city */}
      <div className='weather-panel'>
        
      </div>
    </div>
  );
}

export default App;
