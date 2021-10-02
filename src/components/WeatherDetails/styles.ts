import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4.5rem;
  h3 {
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 2rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
`;

interface CardProps {
  isSmallCard?: boolean;
}

export const Card = styled.div<CardProps>`
  align-items: center;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isSmallCard ? '159px' : '204px')};
  width: 328px;

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
    align-items: center;
    display: flex;
    gap: 0.375rem;
    margin-top: 1rem;
    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
    }
  }
`;
