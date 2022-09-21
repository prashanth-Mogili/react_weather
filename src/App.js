import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import config from "./config"

import axios from 'axios';

function App() {
  const apiKey =  config.apiKey;
  //const apiKey =  "df5c1b9390c44a370afaa0f876a1dc0f";

  const [inputCity,setInputCity] = useState("");
  const [data, setData] = useState("delhi");
  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    if (apiURL) {
       axios.get(apiURL)
        .then((res) => {
          console.log("response", res.data);

          setData(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };
const changeInputCity =(e) =>{
 //console.log(e.target.value);
 setInputCity(e.target.value);
}

  const handleSearch = () => {
   // alert("clicked");
   // alert(inputCity);
    getWetherDetails(inputCity);
    console.log(inputCity);
  }
  useEffect(() => {
    getWetherDetails("mumbai");
  }, []);

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid text-center gap-3 col-2 mt-4">
          <input type="text" className="form-control" onChange={changeInputCity} value={inputCity}/>
          <button className="btn btn-primary"
          onClick={handleSearch} type="button">
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img
            className="weathorIcon"
            src="https://cdn2.vectorstock.com/i/1000x1000/62/11/cloud-computing-logo-design-icon-concept-vector-24016211.jpg"
          />
          <h5 className="weathorCity">{data.name}</h5>
          <h6 className="weathorTemp">{((data?.main?.temp)-273.15).toFixed(2)} °C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
