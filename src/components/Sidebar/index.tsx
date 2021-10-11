import { MdPlace } from 'react-icons/md';

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
  const formattedCurrentWeather = Math.floor(currentWeather.temp);

  const formattedDate = format(fromUnixTime(currentWeather.dt), 'EEE,dd LLL');

  return (
    <Container>
      <Header>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          alt={currentWeather.weather[0].description}
        />
      </Header>
      <WeatherInfo>
        <h1>
          {formattedCurrentWeather}
          <span>ºC</span>
        </h1>
        <h2>{currentWeather.weather[0].main}</h2>
      </WeatherInfo>
      <Footer>
        <p>
          Today<span>•</span>
          {formattedDate}
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
