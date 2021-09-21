import styled from 'styled-components';

export const Container = styled.aside`
  /* background-image: url('/images/Cloud-background.png');
  background-position: center;
  background-repeat: no-repeat; */
  height: 100vh;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.875rem 0;
  background: #1e213a;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;

  .search-button {
    background: #6e707a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
    color: #e7e7eb;
    padding: 10px 18px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const WeatherInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin: 2rem 0;
  }
  h1 {
    font-weight: 500;
    font-size: 9rem;
    span {
      font-weight: 400;
      font-size: 3rem;
      color: #a09fb1;
    }
  }
  h2 {
    margin: 5rem 0;

    font-weight: 600;
    font-size: 2.25rem;
    color: #a09fb1;
  }
`;

export const Footer = styled.footer`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 21px;
  color: #88869d;
  span {
    margin: 0 1rem;
  }
`;

export const City = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
  color: #88869d;
  p {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 21px;
  }
`;
