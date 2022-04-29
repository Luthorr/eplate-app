import React from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

const Input = ({ value, onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    onChange(target.value);
  };
  return (
    <input
      type='text'
      value={value}
      placeholder='Wyszukaj...'
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Input;
