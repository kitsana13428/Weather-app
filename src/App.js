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

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") { //ถ้ามีการกด Enter ให้ทำการดึง API
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json()) //แปลงข้อมูลเป็น json
        .then((results) => {
          setQuery(""); //ให้ช่อง Search เป็นค่าว่าง
          setWeather(results);
          console.log(results);

        })
    }
  }

  return ( //UI Weather
    
    <div className={
        typeof weather.main != "undefined" 
        ? weather.main.temp > 20 
        ? "App hot" :
          "App cold" :
          "App"
    }>
     
      <main> 
        <div className="search-container"> 
          <input 
          type="text"
          placeholder="Search..."
          className="search-bar" 
          onChange={(e) => setQuery(e.target.value)} //ข้อความที่พิมพ์ไปจะถูกส่งไปด้วย setQuery
          value={query}
          onKeyPress={search} //เมื่อมีการกด Enter จะใช้ฟังก์ชั่น Search
          />
        </div>
        {typeof weather.main != "undefined" ? ( // (คล้ายๆ if else) ถ้ามีข้อมูลจะให้แสดง

        <div>
          <div className="location-container">
            <div className="location">
              {weather.name}, {weather.sys.country /* เข้าถึงประเทศ */} 
            </div>
            <div className="date">{dataBuild(new Date())}</div>
          </div>
          <div className="weather-container">
            <div className="temperature">
            {Math.round(weather.main.temp) /*math.round ตัดทศนิยมออก */ }°C 
            </div>
            <div className="weather">{weather.weather[0].main /* เข้าถึงสภาพอากาศ */}</div>
          </div>
        </div>
        ) : ( //ถ้าไม่มีจะให้แสดงหน้าเปล่าๆออกมา
          ""
        )}
      </main>
    </div>
  );
}

export default App;
