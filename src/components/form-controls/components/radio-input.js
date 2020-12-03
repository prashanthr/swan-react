import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'

const RadioInput = ({
  id,
  name,
  formId,
  formName,
  formClassName,
  onFormChange,
  onFormSubmit,
  className,
  choices,
  onChange,
  onBlur,
  onKeyUp,
  onKeyDown,
  elementOnly
}) => {
  const inputEls = (
    <>
      {choices.map((choice, idx) => (
        <>
          <input
            key={idx}
            className={choice.className || ''}
            type='radio'
            id={choice.id}
            name={choice.name || name}
            onBlur={onBlur}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            value={choice.value}
            checked={choice.isSelected}
          />
          {choice.label && <label htmlFor={choice.id}>{choice.label}</label>}
        </>
      ))}
    </>
  )

  return !elementOnly
    ? <Form id={formId} name={formName} className={formClassName} onChange={onFormChange} onSubmit={onFormSubmit}>
        {inputEls}
      </Form>
    : inputEls
}

RadioInput.defaultProps = {
  className: '',
  placeholder: '',
  elementOnly: false,
  choices: [],
  onBlur: () => {},
  onChange: () => {},
  onKeyUp: () => {},
  onKeyDown: () => {}
}

RadioInput.propTypes = {
  className: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    className: PropTypes.string
  })),
  elementOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func
}

export default RadioInput
