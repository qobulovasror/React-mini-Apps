import { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/index.css';

function Weather() {
    const [country, setCountry] = useState("");
    const [data, setData] = useState({
        "location": {
            "name": "Samarqand",
            "region": "Samarqand",
            "country": "Uzbekistan",
            "lat": 39.65,
            "lon": 66.96,
            "tz_id": "Asia/Samarkand",
            "localtime_epoch": 1671730208,
            "localtime": "2022-12-22 22:30"
        },
        "current": {
            "last_updated_epoch": 1671730200,
            "last_updated": "2022-12-22 22:30",
            "temp_c": -1,
            "temp_f": 30.2,
            "is_day": 0,
            "condition": {
                "text": "Clear",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                "code": 1000
            },
            "wind_mph": 18.6,
            "wind_kph": 29.9,
            "wind_degree": 120,
            "wind_dir": "ESE",
            "pressure_mb": 1028,
            "pressure_in": 30.36,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 80,
            "cloud": 0,
            "feelslike_c": -5.2,
            "feelslike_f": 22.6,
            "vis_km": 10,
            "vis_miles": 6,
            "uv": 1,
            "gust_mph": 12.3,
            "gust_kph": 19.8
        },
        "forecast": {
            "forecastday": [
                {
                    "date": "2022-12-22",
                    "date_epoch": 1671667200,
                    "day": {
                        "maxtemp_c": 4.1,
                        "maxtemp_f": 39.4,
                        "mintemp_c": -3.2,
                        "mintemp_f": 26.2,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "uv": 2
                    }
                },
                {
                    "date": "2022-12-23",
                    "date_epoch": 1671753600,
                    "day": {
                        "maxtemp_c": 3.9,
                        "maxtemp_f": 39,
                        "mintemp_c": -4.2,
                        "mintemp_f": 24.4,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "uv": 2
                    }
                },
                {
                    "date": "2022-12-24",
                    "date_epoch": 1671840000,
                    "day": {
                        "maxtemp_c": 7.6,
                        "maxtemp_f": 45.7,
                        "mintemp_c": -2.3,
                        "condition": {
                            "text": "Sunny",
                            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            "code": 1000
                        },
                        "uv": 2
                    }
                }
            ]
        }
    });
    useEffect(()=>{
        render("Samarqand");
    },[]);

    const render = (country)=>{
        const options = {
            method: 'GET',
            // url: 'http://api.weatherapi.com/v1/current.json?key=76ec536ad9a54575a4d35410221812&q='+country+'&aqi=yes',
            url: 'http://api.weatherapi.com/v1/forecast.json?key=76ec536ad9a54575a4d35410221812&q='+country+'&days=7',
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setData(response.data);
          }).catch(function (error) {
            alert("Country no find")
              console.error(error);
          });
    }
    const searchKeyDown = (e)=>{
        if(e.key==='Enter'){
            render(country)
        }
    }
    const searchHandler = (e)=>{
        setCountry(e.target.value);
    }
    const [darkLight, setDarkLight] = useState("light")
    const displyMody = ()=>{
        if(darkLight==="dark")
            setDarkLight("light")
        else
            setDarkLight("dark")
    }
    return ( 
        <div className={darkLight}>
            <div className="container">
                <div className="card column">
                    <div className="row between">
                        <h2>Weather App</h2>
                        <button 
                            className="btn" 
                            onClick={displyMody}>
                            {(darkLight==='light')?("dark"):("light")}
                        </button>
                    </div>
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder='Search...' 
                        onKeyDown={searchKeyDown}
                        onChange={searchHandler}
                    />
                    <div className="tempDay">
                        <div className="row around">
                            <div className="temp column">
                                <h2>{data.location.name}</h2>
                                <div className="row">
                                    <img src={data.current.condition.icon} alt="day temprature" />
                                    <h3 className='gratis'>{data.current.temp_c}</h3>
                                </div>
                                <div className="weatherTitle">{data.current.condition.text}</div>
                            </div>
                            <div className="extraData column">
                                <ul>
                                    <li>
                                        <div className="maxminGratis row between">
                                            <div className="row">
                                                <span className=''>{data.current.last_updated}</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row between">
                                            <i className='bx bx-wind'>shamol:</i> 
                                            <span>{data.current.wind_kph}kph</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row between">
                                            <i className='bx bxs-droplet'>namlik:</i>
                                            <span>{data.current.humidity}%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row between">
                                        <i className='bx bx-vertical-bottom'>bosim:</i>
                                            <span>{data.current.pressure_mb}mp</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row between">
                                        <i className='bx bx-cloud'>Bulut</i>
                                            <span>{data.current.cloud}%</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tempWeek">
                        <ul className="row around">
                            <li className='column'>
                                <span>{data.forecast.forecastday[0].date}</span>
                                <img className="tempImg" src={data.forecast.forecastday[0].day.condition.icon} alt="tempr img" />
                                <span>{data.forecast.forecastday[0].day.condition.text}</span>
                                <div className="row around">
                                    <span className='gratis'>min: {data.forecast.forecastday[0].day.mintemp_c}</span>  
                                    <span className='gratis'>max: {data.forecast.forecastday[0].day.maxtemp_c} </span>
                                </div>
                            </li>
                            <li className='column'>
                                <span>{data.forecast.forecastday[1].date}</span>
                                <img className="tempImg" src={data.forecast.forecastday[1].day.condition.icon} alt="tempr img" />
                                <span>{data.forecast.forecastday[1].day.condition.text}</span>
                                <div className="row around">
                                    <span className='gratis'>min: {data.forecast.forecastday[1].day.mintemp_c}</span>  
                                    <span className='gratis'>max: {data.forecast.forecastday[1].day.maxtemp_c}  </span>
                                </div>
                            </li>
                            <li className='column'>
                                <span>{data.forecast.forecastday[2].date}</span>
                                <img className="tempImg" src={data.forecast.forecastday[2].day.condition.icon} alt="tempr img" />
                                <span>{data.forecast.forecastday[2].day.condition.text}</span>
                                <div className="row around">
                                    <span className='gratis'>min: {data.forecast.forecastday[2].day.mintemp_c}</span>  
                                    <span className='gratis'>max: {data.forecast.forecastday[2].day.maxtemp_c}  </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <h4>Developed by <a href="www.github.com/qobulovasror" target="_blank">QobulovAsror</a></h4> */}
                {/* <h4>Developed by <Link to="https://www.github.com/QobulovAsror">Qobulov.dev</Link></h4> */}
                <h4 onClick={()=>{
                        window.location.href = 'https://www.github.com/QobulovAsror';
                    }
                }>Developed by <span>Qobulov Asror</span></h4>
            </div>
        </div>
     );
}

export default Weather;