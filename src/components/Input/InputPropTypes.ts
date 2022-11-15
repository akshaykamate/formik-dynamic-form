export interface InputPropTypes {
  type: 'text' | 'number' | 'date' | 'password' | 'email'
  name: string
  placeholder?: string
  value?: string
  label?: string
  disabled?: boolean
  validation?: object
  onChange: () => void
}
