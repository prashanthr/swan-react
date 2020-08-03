import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Modal, Button } from '../src'
import './modal.css'

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

export const ModalCustomWidget = () => {
  const [isModalOpen, toggleModal] = useState(false)
  const CustomComponent = () => (
    <div>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <p>This is a paragraph</p>
    </div>
  )
  return (
    <div>
      <Button
        onClick={() => toggleModal(!isModalOpen)}
        value='Toggle Modal'
        withBorder
      />
      <Modal
        contentClassName='custom-modal-content'
        isOpen={isModalOpen}
        content={<CustomComponent />}
        onClose={() => toggleModal(!isModalOpen)}
      />
    </div>
  )
}

ModalWidget.story = {
  name: 'Modal'
}
