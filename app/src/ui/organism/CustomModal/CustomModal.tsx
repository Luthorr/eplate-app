import Modal from 'react-modal';
import { CustomModalProps } from './CustomModal.types';
import styles from './CustomModal.module.css';

const CustomModal = ({ isOpen, handleClose, children }: CustomModalProps) => (
  <Modal
    appElement={document.getElementById('modalContainer') || undefined}
    isOpen={isOpen}
    onRequestClose={handleClose}
    className={styles.ModalWrapper}
  >
    {children}
  </Modal>
);

export default CustomModal;
