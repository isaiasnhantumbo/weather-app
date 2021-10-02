import styled from 'styled-components';

interface TemperatureValueProps {
  isMinTemperature: boolean;
}

export const Container = styled.div`
  width: 132px;
  height: 177px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.125rem 1.375rem;
  h4 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    text-align: center;
    color: #e7e7eb;
  }
  img {
    /* width: 55px; */
    /* height: 63px; */
    /* margin: 0.625rem 0 2rem 0; */
  }
  .temperatureValueContainer {
    display: flex;
    gap: 1rem;
  }
`;
export const TemperatureValue = styled.p<TemperatureValueProps>`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.isMinTemperature ? '#A09FB1' : '#E7E7EB')};
`;
