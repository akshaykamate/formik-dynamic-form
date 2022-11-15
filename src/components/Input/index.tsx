import React from 'react';

import InputDefault from './InputDefault';

import { InputPropTypes } from './InputPropTypes';
// TODO: checkbox, file, hidden, tel, url, not supported types

const Input = ({ type, ...props }: InputPropTypes) => {
  switch (type) {
    case 'text':
    case 'password':
    case 'number':
    case 'email':
    case 'date':
      return <InputDefault type={type} {...props} />
    default:
      throw Error('invalid type exception')
  }
}
export default Input
