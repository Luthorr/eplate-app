import { Image } from 'react-bootstrap';
import classnames from 'classnames';
import TILE_VARIANTS from 'constants/Tile';
import { TileProps } from './Tile.types';
import styles from './Tile.module.css';

const Tile = ({ variant, img }: TileProps) => (
  <div
    className={classnames(styles.tile, {
      [styles.greenTile]: variant === TILE_VARIANTS.GREEN,
      [styles.redTile]: variant === TILE_VARIANTS.RED,
    })}
  >
    <Image src={img} alt='Icon image' width={50} />
  </div>
);

export default Tile;
