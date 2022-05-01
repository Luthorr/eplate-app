import Image from 'react-bootstrap/Image';

const Avatar = ({ img }: { img: string }) => (
  <Image src={img} height={35} width={35} roundedCircle />
);

export default Avatar;
