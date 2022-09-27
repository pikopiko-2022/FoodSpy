import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import ItemPrice from '../ItemPrice'

const fakeItem = {
  id: 1,
  image: '/images/milk.jp',
  item_name: 'Milk',
  location: 'PAKnSAVE Mt Albert',
  description: '2L lite blue milk',
  price: 3.95,
  itemPricesId: 1,
}
const setup = () => {
  const utils = render(<ItemPrice key={fakeItem.id} item={fakeItem} />)
  const input = utils.getByLabelText('price-input')
  return {
    input,
    ...utils,
  }
}

describe('<ItemPrice/>', () => {
  it('displays item list', () => {
    render(<ItemPrice key={fakeItem.id} item={fakeItem} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]).toHaveTextContent('Confirm Price')
  })
  it('calls input onChange', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '$23.0' } })
    expect(input.value).toBe('$23.0')
  })
})
