import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Modal } from '../src'

export default {
  title: 'Modal',
  component: Modal,
}

const ButtonComponent = ({ onClick, value }) => (
  <button onClick={onClick}>
    {value}
  </button>
)

export const ModalWidget = () => {
  const [isModalOpen, toggleModal] = useState(false)
  return (
    <div>
      <ButtonComponent onClick={() => toggleModal(!isModalOpen)} value='Toggle Modal' />
      <Modal
        isOpen={isModalOpen}
        content={'Test content'}
        onClose={() => toggleModal(!isModalOpen)}
      />
    </div>
  )
}

ModalWidget.story = {
  name: 'Modal'
}
