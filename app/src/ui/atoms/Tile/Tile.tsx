import { Image } from 'react-bootstrap';
import classnames from 'classnames';
import TILE_VARIANTS from 'constants/Tile';
import Opinion from 'constants/Opinion';
import { TileProps } from './Tile.types';
import styles from './Tile.module.css';

const Tile = ({ variant, img, handleClick, currentId }: TileProps) => (
  <button
    type='button'
    className={classnames(styles.tile, {
      [styles.greenTile]: variant === TILE_VARIANTS.GREEN,
      [styles.redTile]: variant === TILE_VARIANTS.RED,
      [styles.greenTileClicked]:
        variant === TILE_VARIANTS.GREEN && currentId === Opinion.Positive,
      [styles.redTileClicked]:
        variant === TILE_VARIANTS.RED && currentId === Opinion.Negative,
    })}
    onClick={handleClick}
  >
    <Image src={img} alt='Icon image' width={80} />
  </button>
);

export default Tile;
