import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Modal, Button } from '../src'

export default {
  title: 'Modal',
  component: Modal,
}

export const ModalWidget = () => {
  const [isModalOpen, toggleModal] = useState(false)
  return (
    <div>
      <Button
        onClick={() => toggleModal(!isModalOpen)}
        value='Toggle Modal'
        withBorder
      />
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
