import React, { useState } from 'react'
import keys from './keys'
import './App.css';

const api = { //ตัวแปร
  key: keys.API_KEY, 
  base:  keys.BASE_URL
}

function App() {

  const dataBuild = (d) => { //สร้างวันที่
    let date = String(new window.Date()); //แสดงเวลาออกมา แล้วใช้สติงแปลงให้เป็นข้อความธรรมดา
    date = date.slice(3, 15); //Slice การตัดข้อความเอาตั้งแต่ 3 -15
    return date ;
  }

  return ( //UI Weather
    <div className="App ">
      <main> 
        <div className="search-container"> 
          <input 
          type="text"
          placeholder="Search..."
          className="search-bar" 
          />
        </div>
        <div>
          <div className="location-container">
            <div className="location">
              Bangkok, Thailand
            </div>
            <div className="date">Aug 13 2021</div>
          </div>
          <div className="weather-container">
            <div className="temperature">
              30°C
            </div>
            <div className="weather">Clouds</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
