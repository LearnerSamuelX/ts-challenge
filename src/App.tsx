import React,{useState,useEffect} from 'react';
import './App.css';

import WeatherData from './services/forecast';
import { Weather as WeatherInfo } from './services/forecast';
import Panel from './components/panel'


function App() {

  const [cityName,setCityName]=useState<string>('')
  const [history,setHistory]=useState<string[]>([])
  const [weather,setWeather]=useState<WeatherInfo[]>([])
  const handleChange=(e:any):void=>{
      setCityName(e.target.value)
  } 

  const handleSubmit=(e:any):void=>{ 
      e.preventDefault()

      if(cityName.length===0){
        alert('Please enter the name of a city.')
      }else if(history.includes(cityName)){
        alert('Try a different city please.')
      }
      else{
        setHistory(history.concat(cityName))
        //trigger service here
        WeatherData(cityName).then((res):void=>{
          console.log(res.list[5])
          let future_temperature = res.list[5].main.temp
          let future_weather  = res.list[5].weather[0].icon
          setWeather(weather.concat(
            {
              city:cityName,
              temperature:Math.floor(future_temperature-273.15),
              weather:future_weather
            }
          ))
        }).catch((err:any)=>{
          console.log(err)
        })
        setCityName('')
      }
  }

  return (
    <div className="App">
      <h1>Weather Tracker</h1>
      <div className='search-panel'>  
          <form className='class-panel-form' onSubmit={(e):void=>handleSubmit(e)}>
            <label>City Name:</label>
            <input name='cityname'type='text' placeholder='Enter City Name Here'value={cityName} onChange={(e)=>handleChange(e)}></input>
            <button>Add</button>
          </form>
      </div>
      {/* listed by city */}
      <div className='panel-container'>
          {weather.length===0 && 
            <div>
                No Information
            </div>
          }
          {
            weather.map((i)=>{
                return(<Panel city={i.city} temperature={i.temperature} weather={i.weather} />)
            })
          }
      </div>
    </div>
  );
}

export default App;
