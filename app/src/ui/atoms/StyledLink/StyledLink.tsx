import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { StyledLinkProps } from './StyledLink.types';
import styles from './StyledLink.module.css';

const StyledLink = ({ children, destination }: StyledLinkProps) => (
  <NavLink
    to={destination}
    className={(navData) =>
      navData.isActive
        ? classnames(styles.styledLink, styles.active)
        : classnames(styles.styledLink)
    }
  >
    {children}
  </NavLink>
);

export default StyledLink;
