import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  variant: string;
  handleClick?: () => void;
};
