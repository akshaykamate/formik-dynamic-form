export interface FormElementPropTypes {
  formType: 'input'
  options: object
  validations: object
}

export interface FormPropTypes {
  name: string
  title: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  elements: FormElementPropTypes[][]
}
