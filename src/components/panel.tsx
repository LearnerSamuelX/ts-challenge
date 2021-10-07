import React,{useState} from 'react';
import { Weather as Props } from '../services/forecast';

const Panel:React.FC<Props>=({city,temperature,weather})=>{
    return(
        <div className='panel'>
            <div className='panel-element'>{city}</div>
            <div className='panel-element'>{temperature}</div>
            <div className='panel-element'>{weather} </div>
        </div>
    )
}

export default Panel