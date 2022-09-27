import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { getItemData, getItem } from '../../apis/apiClient'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Item from '../Item'
import ItemPrice from '../ItemPrice'
import Map from '../Map'

jest.mock('../ItemPrice')
jest.mock('../Map')
jest.mock('../../apis/apiClient.js')

const allMilkPricesByStore = [
  {
    id: 1,
    item_name: 'Milk',
    location: 'PAKnSAVE Mt Albert',
  },
  {
    id: 2,
    item_name: 'Milk',
    location: 'Countdown Grey Lynn',
  },
  {
    id: 3,
    item_name: 'Milk',
    location: 'New World Victoria',
  },
]

const milkItem = {
  id: 1,
  item_name: 'Milk',
  description: '2L lite blue milk',
  image_url: '/images/milk.jpeg',
}

const fakeDispatch = jest.fn()
const fakeStore = {
  subscribe: jest.fn(),
  dispatch: fakeDispatch,
  getState: jest.fn(() => {
    return { store: { name: 'Milk', quantity: 2 } }
  }),
}

getItemData.mockImplementation(() => Promise.resolve(allMilkPricesByStore))
getItem.mockImplementation(() => Promise.resolve(milkItem))

ItemPrice.mockImplementation((item) => (
  <div data-testid="one-item" key={item.id}>
    Test component
  </div>
))

Map.mockImplementation(() => <>Google map div</>)

let container

beforeEach(() => {
  jest.clearAllMocks()

  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

describe('<Item />', () => {
  it('should display information about an item', async () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Item />
        </BrowserRouter>
      </Provider>
    )

    await sleep(500) // give useEffect some time to run

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Prices for ' + milkItem.item_name
    )
  })
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
