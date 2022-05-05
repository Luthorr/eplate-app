import { SiteHeadingProps } from './SiteHeading.types';

const SiteHeading = ({ text }: SiteHeadingProps) => (
  <h1 className='display-4 fw-bold text-center text-md-start'>{text}</h1>
);

export default SiteHeading;
