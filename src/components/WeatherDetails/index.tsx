import { ReactNode } from 'react';
import { MdNearMe } from 'react-icons/md';

import { Card, CardContainer, Container } from './styles';

interface WeatherDetailsProps {
  windSpeed: number;
  humidity: number;
  visibility: string;
  airPressure: number;
}

export function WeatherDetails({
  humidity,
  visibility,
  airPressure,
  windSpeed,
}: WeatherDetailsProps) {
  return (
    <Container>
      <h3>Today’s Hightlights</h3>
      <CardContainer>
        <Card>
          <p>Wind status</p>
          <h1>
            {windSpeed}
            <span>mph</span>
          </h1>
          <div>
            <MdNearMe />
            <span>WSW</span>
          </div>
        </Card>
        <Card>
          <p>Humidity</p>
          <h1>{humidity}%</h1>
          <div>
            <span>0</span>
            <span>50</span>
            <span>10</span>
            <div className="bar" />
            <span>%</span>
          </div>
        </Card>
        <Card isSmallCard>
          <p>Visibility</p>
          <h1>
            {visibility} <span>miles</span>
          </h1>
        </Card>
        <Card isSmallCard>
          <p>Air Pressure</p>
          <h1>
            {airPressure} <span>mb</span>
          </h1>
        </Card>
      </CardContainer>
    </Container>
  );
}
