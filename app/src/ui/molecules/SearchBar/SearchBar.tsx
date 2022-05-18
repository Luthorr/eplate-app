import Input from 'ui/atoms/Input/Input';
import CustomButton from 'ui/atoms/Button/Button';

const SearchBar = () => (
  <div
    className='d-flex flex-wrap justify-content-center align-items-center'
    style={{ columnGap: '1.2rem' }}
  >
    <div className='searchBar__inputContainer py-2'>
      <Input
        placehorder='Wyszukaj po numerze tablicy...'
        type='text'
        value=''
        onChange={() => {}}
      />
    </div>
    <div className='searchBar__buttonContainer py-1'>
      <CustomButton variant='primary'>Wyszukaj</CustomButton>
    </div>
  </div>
);

export default SearchBar;
