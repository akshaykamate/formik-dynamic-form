import React from 'react';

import {InputPropTypes} from './InputPropTypes';

const InputDefault = (props: InputPropTypes) => {
  const {label, name, ...rest} = props.options
  return (
    <article>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...rest} />
    </article>
  )
}

export default InputDefault
