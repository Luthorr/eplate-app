import BUTTON_VARIANTS from 'constants/Button';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppRoute from 'routing/AppRoutes.enum';
import error404 from 'ui/assets/images/error404.svg';
import CustomButton from 'ui/atoms/Button/Button';

const SiteError = () => (
  <div className='d-flex flex-column justify-content-center align-items-center py-5'>
    <Image src={error404} fluid />
    <div className='pt-5'>
      <Link to={AppRoute.Home}>
        <CustomButton variant={BUTTON_VARIANTS.PRIMARY}>Powrót</CustomButton>
      </Link>
    </div>
  </div>
);

export default SiteError;
