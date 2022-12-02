export const form = {
  name: 'login',
  title: 'Login',
  method: 'post',
  elements: [
    [
      {
        elementType: 'input',
        options: {
          type: 'email',
          label: 'Username',
          name: 'username',
          placeholder: 'Username',
          initialValue: '',
          value: ''
        },
        validations: {
          required: true,
          min: 6,
          max: 225
        }
      },
      {
        elementType: 'input',
        options: {
          type: 'password',
          label: 'Password',
          name: 'password',
          placeholder: 'Password',
          initialValue: '',
          value: ''
        },
        validations: {
          required: true,
          min: 8,
          max: 32
        }
      }
    ]
  ]
}
