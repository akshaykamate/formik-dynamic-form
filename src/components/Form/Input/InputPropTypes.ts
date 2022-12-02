export interface InputPropTypes {
  formType: 'input'
  options: {
    type: 'number' | 'text' | 'date' | 'password' | 'email'
    name: string
    placeholder?: string
    value?: string
    label?: string
    disabled?: boolean
    onChange: () => void
  }
  validation?: object
}
