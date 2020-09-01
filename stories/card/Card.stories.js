import React from 'react'
import { Card } from '../../src'
import './index.css'

export default {
  title: 'Card',
  component: Card,
}

const Wrap = ({ card }) => (
  <div className='wrap-card'>
    {card}
  </div>
)

export const SimpleCard = () => (
  <Wrap
    card={(
      <Card
        content={(
          <div>
            Hello, I'm a card!<br />
            Lorem ipsum dum <br />
            bore mum sifus
          </div>
        )}
      />
    )}
  />
)

export const RoundedCard = () => (
  <Wrap
    card={(
      <Card
        content={(
          <div>
            Hello, I'm a rounded card!<br />
            Lorem ipsum dum <br />
            bore mum sifus
          </div>
        )}
        isRounded
      />
    )}
  />
)
