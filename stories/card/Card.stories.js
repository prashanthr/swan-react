import React from 'react'
import { Card } from '../../src'
import './index.css'

export default {
  title: 'Card',
  component: Card,
}

const IMG_SRC = 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'

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

export const RoundedCardWithImage = () => (
  <Wrap
    card={(
      <Card
        content={(
          <div>
            <br />
            <img src={IMG_SRC} width={'100%'} />
            <br />
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
