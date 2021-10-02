import { format, fromUnixTime } from 'date-fns';
import { ReactNode, useState } from 'react';
import { WeatherDailyCard } from '../WeatherDailyCard';

import { Container } from './styles';

interface WeatherStateListProps {
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
interface WeatherDaily {
  minTemperature: number;
  maxTemperature: number;
  weekDay: string;
  weatherState: {
    main: string;
    description: string;
    icon: string;
  };
}

export function WeatherStateList({ daily }: WeatherStateListProps) {
  return (
    <Container>
      {daily.map((day) => {
        return (
          <WeatherDailyCard
            key={day.dt}
            maxTemperature={day.temp.max}
            minTemperature={day.temp.min}
            weatherState={day.weather[0]}
            weekDay={day.dt}
          />
        );
      })}
    </Container>
  );
}
