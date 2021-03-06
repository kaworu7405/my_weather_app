import { useEffect, useState } from "react";
import CityList from "../components/CityList"

function Cities(){

    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";

    const [cityState, setCityState] = useState([]);

    useEffect(() => {
        console.log("cities component mounted!");
        getCities();
      }, []); // once
      async function getCities() {
          const cities = await fetch(API_URL).then((res) => res.json());
          console.log(cities);
          setCityState(cities);
        }

    return (
      <div>
        <h1>Cities</h1>
        <p className="styleForCityList"> {API_URL}의 내용을 가져옵니다. </p>
        <CityList cities={cityState} />
      </div>
    );
}

export default Cities;