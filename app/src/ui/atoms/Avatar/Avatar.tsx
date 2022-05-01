import Image from 'react-bootstrap/Image';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ img }: AvatarProps) => (
  <Image src={img} height={35} width={35} roundedCircle />
);

export default Avatar;
