import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Item from '../Item'
import ItemPrice from '../ItemPrice'

jest.mock('../ItemPrice')

ItemPrice.mockImplementation(() => {
  return <div data-testid="testId">Test component</div>
})

beforeEach(() => {
  jest.clearAllMocks()
})

const mockHeading = {
  heading: 'Check the prices for this item',
}

describe('<Item />', () => {
  it('should display information about an item', () => {
    render(
      <BrowserRouter>
        <Item />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent(mockHeading.heading)
    expect(1).toBe(2)
    // const heading = screen.getByTestId('testId')
    // expect(heading).toHaveTextContent('Test Component')
  })
})
