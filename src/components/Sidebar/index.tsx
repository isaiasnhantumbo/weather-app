import React, { useState } from 'react';
import { RoundButton } from '../RoundButton';
import { MdMyLocation, MdPlace } from 'react-icons/md';

import { City, Container, Footer, Header, WeatherInfo } from './styles';
import { format, fromUnixTime } from 'date-fns';
interface SidebarProps {
  city: string;
  currentWeather: {
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
}

function Sidebar({ city, currentWeather }: SidebarProps) {
  const formattedCurrentWeather = Math.floor(currentWeather?.temp);

  const formattedDate = format(fromUnixTime(currentWeather.dt), 'EEE,dd LLL');

  console.log(formattedDate);

  return (
    <Container>
      <Header>
        <button className="search-button">Search for places</button>
        <RoundButton>
          <MdMyLocation size={22} />
        </RoundButton>
      </Header>
      <WeatherInfo>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          alt={currentWeather.weather[0].description}
        />
        <h1>
          {formattedCurrentWeather}
          <span>ºC</span>
        </h1>
        <h2>{currentWeather?.weather[0].main}</h2>
      </WeatherInfo>
      <Footer>
        <p>
          Today<span>•</span>{formattedDate}
        </p>
        <City>
          <MdPlace size={24} />
          <p>{city}</p>
        </City>
      </Footer>
    </Container>
  );
}

export default Sidebar;
