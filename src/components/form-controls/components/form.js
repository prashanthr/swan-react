import React from 'react'
import PropTypes from 'prop-types'
import SubmitButton from './submit-button'

const Form = ({ id, name, ref, className, includeSubmitButton, action, children, onChange, onSubmit }) => (
  <form ref={ref} id={id} name={name} className={className} onChange={onChange} onSubmit={onSubmit} action={action}>
    {children}
    {includeSubmitButton && <SubmitButton />}
  </form>
)

Form.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
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
