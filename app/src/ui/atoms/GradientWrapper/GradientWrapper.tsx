import styles from './GradientWrapper.module.css';
import { GradientWrapperProps } from './GradientWrapper.types';

const GradientWrapper = ({ children }: GradientWrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);

export default GradientWrapper;
