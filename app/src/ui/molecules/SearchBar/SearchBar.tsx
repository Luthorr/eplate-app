import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'ui/atoms/Input/Input';
import CustomButton from 'ui/atoms/Button/Button';
import classnames from 'classnames';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleChange = (val: string) => {
    setValue(val);
  };

  return (
    <div
      className={classnames(
        'd-flex flex-wrap justify-content-center align-items-center',
        styles.search,
      )}
    >
      <div className='searchBar__inputContainer py-2'>
        <Input
          placehorder='Wyszukaj po numerze tablicy...'
          type='text'
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className='searchBar__buttonContainer py-1'>
        <Link to={`/comment/search/${value}`}>
          <CustomButton variant='primary'>Wyszukaj</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
