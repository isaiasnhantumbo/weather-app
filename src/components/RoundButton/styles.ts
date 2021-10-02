import styled from 'styled-components';

interface ButtonProps {
  isCelsiusButton?: boolean;
}

export const Container = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${(props) =>
    props.isCelsiusButton ? '#E7E7EB' : 'rgba(255, 255, 255, 0.2)'};
  display: flex;
  color: ${(props) => (props.isCelsiusButton ? '#110E3C' : '#E7E7EB')};
  font-weight: bold;
  font-size: 1.125rem;
  height: 40px;
  justify-content: center;
  width: 40px;
`;
