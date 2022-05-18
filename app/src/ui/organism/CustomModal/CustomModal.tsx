import { ReactNode } from 'react';
import Modal from 'react-modal';
import styles from './CustomModal.module.css';

type CustomModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
};

const CustomModal = ({ isOpen, handleClose, children }: CustomModalProps) => (
  <Modal
    appElement={document.getElementById('root') || undefined}
    isOpen={isOpen}
    onRequestClose={handleClose}
    className={styles.ModalWrapper}
  >
    {children}
  </Modal>
);

export default CustomModal;
