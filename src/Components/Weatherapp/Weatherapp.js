import React from 'react'
import './Weatherapp.css'
import search_icon from '../Asset/search.png'
import cloud_icon from '../Asset/cloudy.png'
 import humidity_icon from '../Asset/humidity.png'
 import hawa_icon from '../Asset/hawa.png'
 
const Weatherapp = () => {
 
  let api_key =`dd94f859a0e52d6e4767fddf735f04a7`;

  const search = async ()=>{
    const element= document.getElementsByClassName("city-in")

    if (element[0].value==="") {
      return 0;
    }
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`


    let response = await fetch(url);

    let data = await response.json();

    const humudity = document.getElementsByClassName("humidity")

    const wind = document.getElementsByClassName("wind-rate")

    const temp = document.getElementsByClassName("weather-temp")

    const location = document.getElementsByClassName("weather-loc")


    humudity[0].innerHTML =data.main.humidity+"%";
    wind[0].innerHTML =data.wind.speed+"km/h";
    temp[0].innerHTML= data.main.temp+"°C";
    location[0].innerHTML=data.name;

     


  }

  return (
    <> 
    <div className='Container'>
       
      <div className="top-bar">
        <input type="text" className="city-in" placeholder='Enter city name...' />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="wether-image">
        <img className='imageea' src= {cloud_icon} alt="" />
      </div>
      <div className="weather-temp">
      0°C</div> 
      <div className='weather-loc'>City Name</div>
      <div className="data-container">
        <div className="element">


          <img className='imagee' src= {humidity_icon} alt="" />

          <div className="data">
            <div className="humidity">0%</div>
            <div className="text">Shivam</div>
          </div>
        </div>
        <div className="element">
          <img className='imagee' src= {hawa_icon} alt="" />
          <div className="data">
            <div className="wind-rate">0 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
       
    </div>
    </>
  )
}

export default Weatherapp
