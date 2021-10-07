import React from "react";

export interface Weather {
    city:string,
    temperature:number
    weather?:string //make this url
}

const WeatherData = async (cityname:string):Promise<any>=>{
    let api_key = '2357e9d6edbc1dca9778ffaae19a1bf0'
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}`

    let data = await fetch(url,{
        method:'GET'
    })

    return data.json()
}

export default WeatherData