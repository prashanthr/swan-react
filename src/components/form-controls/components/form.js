import React from 'react'
import PropTypes from 'prop-types'
import SubmitButton from './submit-button'

const Form = ({ id, name, className, includeSubmitButton, action, children, onChange, onSubmit }) => (
  <form id={id} name={name} className={className} onChange={onChange} onSubmit={onSubmit} action={action}>
    {children}
    {includeSubmitButton && <SubmitButton />}
  </form>
)

Form.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  action: PropTypes.string,
  includeSubmitButton: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  className: '',
  action: '',
  includeSubmitButton: false,
  onChange: () => {},
  onSubmit: () => {}
}

export default Form
