import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4.5rem;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 2rem;
  }

  @media (max-width: 1366px) {
    margin-top: 2.5rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
  align-items: flex-start;

  @media (max-width: 1366px) {
    gap: 2rem;
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  isSmallCard?: boolean;
}

export const Card = styled.div<CardProps>`
  align-items: center;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isSmallCard ? '10rem' : '12rem')};
  width: 20.5rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 1.375rem 0 0.375rem;
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
    span {
      font-size: 2.375rem;
      font-weight: 500;
    }
  }
  div {
    margin-top: 1rem;

    span {
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 16px;
    }
  }
`;

export const Bar = styled.div`
  border-radius: 80px;
  height: 0.5rem;
  width: 14.3125rem;
  flex: 1;
  background-color: #e7e7eb;
  position: relative;

  div {
    border-radius: 80px;
    height: 8px;
    background-color: #ec6e4c;
  }
`;
