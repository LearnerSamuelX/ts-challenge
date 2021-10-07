import React,{useState} from 'react';
import { Weather as Props } from '../services/forecast';

const Panel:React.FC<Props>=({city,temperature,weather})=>{

    
    let url = "http://openweathermap.org/img/wn/"+weather+'@2x.png'


    return(
        <div className='panel'>
            <div className='panel-element'><p>{city}</p></div>
            <div className='panel-element'><p>{temperature}˚C</p></div>
            <div className='panel-element'>
                <img src={"http://openweathermap.org/img/wn/"+weather+'@2x.png'}></img>
            </div>
        </div>
        
    )
}

export default Panel