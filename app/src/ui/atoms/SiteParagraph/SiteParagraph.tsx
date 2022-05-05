import { SiteParagraphProps } from './SiteParagraph.types';

const SiteParagraph = ({ text }: SiteParagraphProps) => (
  <h5 className='text-muted'>{text}</h5>
);

export default SiteParagraph;
