import React from 'react';
import { RoundButton } from '../RoundButton';
import { MdMyLocation, MdPlace } from 'react-icons/md';
import IsoRainSwrsDay from '../../assets/HeavyRain.png';

import { City, Container, Footer, Header, WeatherInfo } from './styles';

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <Container>
      <Header>
        <button className="search-button">Search for places</button>
        <RoundButton>
          <MdMyLocation size={22} />
        </RoundButton>
      </Header>
      <WeatherInfo>
        <img src={IsoRainSwrsDay} alt="Rain" />
        <h1>
          15<span>ºC</span>
        </h1>
        <h2>Shower</h2>
      </WeatherInfo>
      <Footer>
        <p>
          Today<span>•</span>Fri, 5 Jun
        </p>
        <City>
          <MdPlace size={24} />
          <p>Helsinki</p>
        </City>
      </Footer>
    </Container>
  );
}

export default Sidebar;
