"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from './page.module.css';
import NavBar from '@/app/components/navbar/navbar';
import Logo from "../../components/logo/logo";
import Line from "../../components/line/line";

const apiKey = '4470ceca5007f98cf26e721e8c3ae768';
const initialTilburgUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tilburg&units=metric&appid=${apiKey}`;
const initialAmsterdamUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${apiKey}`;

export default function Page() {
  const [tilburgCity, setTilburgCity] = useState('');
  const [tilburgWeather, setTilburgWeather] = useState<any>({});
  const [amsterdamCity, setAmsterdamCity] = useState('');
  const [amsterdamWeather, setAmsterdamWeather] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeatherData(initialTilburgUrl); // Haal weerdata voor Tilburg op bij laden van de pagina
    fetchAmsterdamWeatherData(initialAmsterdamUrl); // Haal weerdata voor Amsterdam op bij laden van de pagina
  }, []);

  const fetchWeatherData = (url: string) => {
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setTilburgWeather(response.data);
        setTilburgCity(response.data.name); // Stel de stad in vanuit de API-respons
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Tilburg weather data:', error);
        setLoading(false);
      });
  }

  const fetchAmsterdamWeatherData = (url: string) => {
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setAmsterdamWeather(response.data);
        setAmsterdamCity(response.data.name); // Stel de stad in vanuit de API-respons
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Amsterdam weather data:', error);
        setLoading(false);
      });
  }

  const getRoundedTemp = (temp: number) => {
    return Math.round(temp); // Rond het getal af naar het dichtstbijzijnde gehele getal
  }

  const translateWeather = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return 'Helder';
      case 'clouds':
        return 'Bewolkt';
      case 'rain':
        return 'Regen';
      case 'drizzle':
        return 'Motregen';
      case 'thunderstorm':
        return 'Onweer';
      case 'snow':
        return 'Sneeuw';
      case 'mist':
        return 'Mist';
      case 'smoke':
        return 'Rook';
      case 'haze':
        return 'Waas';
      default:
        return weatherMain;
    }
  };

  const selectBackgroundImage = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return '/img/Weather/ClearAnimated.gif';
      case 'clouds':
        return '/img/Weather/CloudyAnimated.gif';
      case 'rain':
        return '/img/Weather/RainAnimated.gif';
      default:
        return '/img/Weather/Clear.jpg'; // Als fallback
    }
  };

  return (
    <>
      <Logo />
      <div className={Styles.ContentArea}>
        <Line />
        {/* Tilburg weer widget */}
        <div className={Styles.ElementBorder} style={{ backgroundImage: `url(${selectBackgroundImage(tilburgWeather.weather ? tilburgWeather.weather[0].main : 'default')})` }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className={Styles.WeatherDataContainer}>
              {tilburgWeather.main && (
                <div className={Styles.WeatherData}>
                  <p className={Styles.Temp}>{getRoundedTemp(tilburgWeather.main.temp)}°</p>
                  <div>
                    <p>{tilburgCity}</p>
                    {tilburgWeather.weather && tilburgWeather.weather.length > 0 && (
                      <p>{translateWeather(tilburgWeather.weather[0].main)}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <Line></Line>

        {/* Amsterdam weer widget */}
        <div className={Styles.ElementBorder} style={{ backgroundImage: `url(${selectBackgroundImage(amsterdamWeather.weather ? amsterdamWeather.weather[0].main : 'default')})` }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className={Styles.WeatherDataContainer}>
              {amsterdamWeather.main && (
                <div className={Styles.WeatherData}>
                  <p className={Styles.Temp}>{getRoundedTemp(amsterdamWeather.main.temp)}°</p>
                  <div>
                    <p>{amsterdamCity}</p>
                    {amsterdamWeather.weather && amsterdamWeather.weather.length > 0 && (
                      <p>{translateWeather(amsterdamWeather.weather[0].main)}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
      <NavBar activePage="discover" />
    </>
  );
}
