import { Image } from 'react-bootstrap';
import classnames from 'classnames';
import TILE_VARIANTS from 'constants/Tile';
import { TileProps } from './Tile.types';
import styles from './Tile.module.css';

const Tile = ({ variant, img, handleClick, currentId }: TileProps) => (
  <button
    type='button'
    className={classnames(styles.tile, {
      [styles.greenTile]: variant === TILE_VARIANTS.GREEN,
      [styles.redTile]: variant === TILE_VARIANTS.RED,
      [styles.greenTileClicked]:
        variant === TILE_VARIANTS.GREEN && currentId === 1,
      [styles.redTileClicked]: variant === TILE_VARIANTS.RED && currentId === 2,
    })}
    onClick={handleClick}
  >
    <Image src={img} alt='Icon image' width={80} />
  </button>
);

export default Tile;
