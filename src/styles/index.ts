import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 720px) {
    font-size: 87.5%;
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  padding: 2rem 8.25rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    align-items: center;
    gap: 2rem;
  }
  header {
    display: flex;
    gap: 0.75rem;
    margin-left: auto;
    margin-bottom: 4.125rem;
  }
`;

export const Footer = styled.footer`
  color: #a09fb1;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-top: auto;
  span {
    text-decoration: underline;
    font-weight: 700;
  }
`;
