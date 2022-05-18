/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { LabelProps } from './Label.types';

const Label = ({ children }: LabelProps) => (
  <label className='d-flex flex-column'>{children}</label>
);

export default Label;
