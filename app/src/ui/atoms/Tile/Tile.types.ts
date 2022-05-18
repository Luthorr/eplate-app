export type TileProps = {
  img: string;
  variant: 'green' | 'red';
  handleClick: () => void;
  currentId?: number;
};
