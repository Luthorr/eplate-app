import { ReactNode } from 'react';

export type CustomModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
};
