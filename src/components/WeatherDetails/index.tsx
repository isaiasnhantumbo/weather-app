import { MdNearMe } from 'react-icons/md';

import { Bar, Card, CardContainer, Container } from './styles';

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
            <Bar>
              <div style={{ width: `${humidity}%` }} />
            </Bar>
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
