import { ReactNode } from 'react';

interface EmailProps {
  children?: ReactNode;
}

export const Email = ({ children }: EmailProps): JSX.Element => {
  return <div>{children}</div>;
};
