export const required = value => (value ? undefined : 'Required')
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
export const tooOld = value => value && value > 65 ? 'You might be too old for this' : undefined
export const aol = value => value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined
export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined
export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits': undefined

export const validate = (values) => {
  const errors = {};

  if (values.email) {
    if (values.email.length < 5) {
      errors.email = 'To short email'
    }
    if (values.email.length > 30) {
      errors.email = 'To long email'
    }
    if (!values.email.includes('@')) {
      errors.email = 'Check email format'
    }
  }

  if (values.password) {
    if (values.password.length < 5) {
      errors.password = 'To short password'
    }
    if (values.password.length > 30) {
      errors.password = 'To long password'
    }
  }

  return errors;
}
