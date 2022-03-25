import { useState } from 'react';

import "./index.modules.css";

const api ={
  key: "c057fc55f2e37f460bb417d21f293535",
  base:'https://api.openweathermap.org/data/2.5'}


function App() {

const [query, setQuery]=useState('');
const [weather, setWeather]=useState({});

const search =(evt)=>{
  if (evt.key=== "Enter"){
    fetch(`${api.base}/weather/?q=${query}&units=metric&APPID=${api.key}`)
    .then (res=>res.json())
    .then(result => { setQuery(''); 
    setWeather(result);
    return result})
    ;}}


  function dateBuilder(e) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();

    return `${day} ${date} ${month} 
    ${year} `;}

  return (  
  <div className='app'>

    <div className='search-box'>
    <input type="text"
    className='search-bar'
    placeholder='search...'
    onChange ={e=>setQuery(e.target.value)}
    value={query}
    onKeyPress={search} /> 
    </div>

  {(typeof weather.main!= "undefined")?(
   <div> 
   
     <div className='location'> <h1>{weather.name},{weather.sys.country} 
     </h1>
</div>
<div className='date'> {dateBuilder(new Date())} </div>
    
<div className='temp'> <h1>{Math.round(weather.main.temp)}°C</h1></div>
<div className='weather'><p>{weather.weather[0].main}</p> </div>
      </div>
      ): (" ")}
       weather app     
    </div>
  );
}

export default App;
