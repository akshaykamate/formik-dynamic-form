import React from "react";

import Input from "./Input"

import { InputPropTypes } from "./Input/InputPropTypes";

export function FormElement(element: InputPropTypes) {
  switch (element.formType) {
    case 'input': return <Input {...element} />;

    default:
      throw Error('invalid form element');
  }
}
