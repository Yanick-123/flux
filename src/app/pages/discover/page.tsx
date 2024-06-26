"use client";

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Styles from './page.module.css';
import NavBar from '@/app/components/navbar/navbar';
import Logo from "../../components/logo/logo";
import Line from "../../components/line/line";
import Image from 'next/image';
import SearchIcon from '../../../../public/img/icons/SearchWhite.svg';
import LocationIcon from '../../../../public/img/icons/LocationWhite.svg';

const apiKey = '4470ceca5007f98cf26e721e8c3ae768';

export default function Page() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [inputCity, setInputCity] = useState('');
  const [error, setError] = useState(false);
  const typingTimeoutRef = useRef<any>(null);

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            .then((response) => {
              const cityName = response.data.name;
              setInputCity(cityName);
              setCity(cityName);
              setError(false);
              fetchWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
            })
            .catch((error) => {
              console.error('Error fetching weather data based on location:', error);
            });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      alert('Geolocation wordt niet ondersteund door deze browser.');
    }
  };

  const fetchWeatherData = (url: string) => {
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setWeatherData(response.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setError(true);
        setLoading(false);
      });
  };

  const getRoundedTemp = (temp: number) => {
    return Math.round(temp);
  };

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
        return '/img/Weather/Clear.jpg';
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const city = event.target.value;
    setInputCity(city);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      setCity(city);
      fetchWeatherData(url);
    }, 2000);
  };

  const handleCurrentLocationClick = () => {
    getCurrentLocationWeather();
  };

  const handleSearchClick = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;
    fetchWeatherData(url);
  };

  return (
    <>
      <Logo />
      <div className={Styles.ContentArea}>
        <Line />

        {/* Invoerveld voor stad */}
        <div className={Styles.SearchContainer}>
          <a href="#" className={Styles.ButtonLeft} onClick={handleCurrentLocationClick}>
            <Image src={LocationIcon} width={20} height={20} alt="" />
          </a>
          <input
            className={Styles.SetLocation}
            type="text"
            value={inputCity}
            onChange={handleCityChange}
            placeholder="Voer een stad in"
          />
          <a href="#" className={Styles.ButtonRight} onClick={handleSearchClick}>
            <Image src={SearchIcon} width={20} height={20} alt="" />
          </a>
        </div>

        {/* Weer widget */}
        <div className={Styles.ElementBorder} style={{ backgroundImage: `url(${selectBackgroundImage(weatherData.weather ? weatherData.weather[0].main : 'default')})` }}>
          {loading ? (
            <p className={Styles.ErrorText}>Loading...</p>
          ) : error ? (
            <p className={Styles.ErrorText}>Voer een geldige locatie in</p>
          ) : (
            <div className={Styles.WeatherDataContainer}>
              {weatherData.main && (
                <div className={Styles.WeatherData}>
                  <p className={Styles.Temp}>{getRoundedTemp(weatherData.main.temp)}°</p>
                  <div>
                    <p>{city}</p>
                    {weatherData.weather && weatherData.weather.length > 0 && (
                      <p>{translateWeather(weatherData.weather[0].main)}</p>
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
