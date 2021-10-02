import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RoundButton } from './components/RoundButton';
import Sidebar from './components/Sidebar';
import { WeatherDetails } from './components/WeatherDetails';
import { WeatherStateList } from './components/WeatherStateList';
import { api } from './services/api';

import { Main, Section, Footer } from './styles';
import GlobalStyles from './styles/global';

interface Location {
  latitude?: string;
  longitude?: string;
  city: string;
}
interface WeatherStateProps {
  current: {
    dt: number;
    temp: number;
    humidity: number;
    wind_speed: number;
    visibility: string;
    pressure: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  };
  daily: {
    dt: number;
    temp: {
      max: number;
      min: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
}

export default function App() {
  const [weatherState, setWeatherState] = useState({} as WeatherStateProps);
  const [location, setLocation] = useState({} as Location);

  useEffect(() => {
    axios
      .get(
        'http://api.ipstack.com/check?access_key=0dc841a565d72836e6c76dd79ae5a04e'
      )
      .then((response) => {
        setLocation(response.data);
      });

    api
      .get(
        `data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&exclude={current,minutely,hourly,alerts}&appid=${process.env.REACT_APP_API_SECRET_KEY}`
      )
      .then((response) => {
        setWeatherState(response.data);
      });
  }, [location.latitude, location.longitude]);
  if (weatherState.current === undefined) {
    return <div>Fetching weather, please wait..</div>;
  }
  return (
    <>
      <GlobalStyles />
      <Main>
        <Sidebar city={location.city} currentWeather={weatherState.current} />
        <Section>
          <header>
            <RoundButton isCelsiusButton>°C</RoundButton>
            <RoundButton>°F</RoundButton>
          </header>
          <WeatherStateList daily={weatherState.daily} />
          <WeatherDetails
            airPressure={weatherState.current.pressure}
            humidity={weatherState.current.humidity}
            visibility={weatherState.current.visibility}
            windSpeed={weatherState.current.wind_speed}
          />
          <Footer>
            created by <span>isaiasnhantumbo</span> - devChallenges.io
          </Footer>
        </Section>
      </Main>
    </>
  );
}
