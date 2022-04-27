import Image from 'react-bootstrap/Image';
import { HeroImageProps } from './HeroImage.types';
import styles from './HeroImage.module.css';

const HeroImage = ({ img, alt }: HeroImageProps) => (
  <Image src={img} alt={alt} className={styles.img} fluid />
);

export default HeroImage;
