import React from 'react';

import InputDefault from './InputDefault';

import { InputPropTypes } from './InputPropTypes';
// TODO: checkbox, file, hidden, tel, url, not supported types

const Input = (element: InputPropTypes) => {
  const { type } = element.options
  switch (type) {
    case 'text':
    case 'password':
    case 'number':
    case 'email':
    case 'date':
      return <InputDefault {...element} />
    default:
      throw Error('invalid type exception')
  }
}
export default Input
