import { SiteHeadingProps } from './SiteHeading.types';

const SiteHeading = ({ children }: SiteHeadingProps) => (
  <h1 className='display-4 fw-bold text-center text-md-start'>{children}</h1>
);

export default SiteHeading;
