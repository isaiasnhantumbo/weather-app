import { ReactNode } from 'react';

import { Container } from './styles';

interface RoundButtonProps {
  children: ReactNode;
  isCelsiusButton?: boolean;
}

export function RoundButton({ children, isCelsiusButton }: RoundButtonProps) {
  return <Container isCelsiusButton={isCelsiusButton}>{children}</Container>;
}
