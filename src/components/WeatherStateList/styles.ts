import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;

  gap: 1.625rem;
  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
