import React from "react"

import { FormElement } from './FormElement';

import { FormPropTypes, FormElementPropTypes } from "./FormElementPropTypes";

export const Form = (props: FormPropTypes) => {
  const {method, name, elements } = props
  return (
    <form name={name} method={method || 'POST'}>
      {elements.map((row:FormElementPropTypes[], rowIndex:number) => (
        <section className='row' key={rowIndex}>
          {row.map((element: FormElementPropTypes, elementIndex: number): JSX.Element => (
            <FormElement {...element} key={elementIndex} />
          ))}
        </section>
      ))}
    </form>
  )
}
