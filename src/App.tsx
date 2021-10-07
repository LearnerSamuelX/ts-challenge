import React,{useState,useEffect} from 'react';

import './App.css';



function App() {

  const [cityName,setCityName]=useState<string>('')
  const [weather,setWeather]=useState([])

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
      <div className=''>

      </div>
    </div>
  );
}

export default App;
