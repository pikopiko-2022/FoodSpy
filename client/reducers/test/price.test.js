import { SET_PRICE_CONTENT } from '../../actions/price'
import price from '../price'

const priceContentMockData = [
  {
    id: 1,
    item_name: 'Bread',
    location: 'Countdown Grey Lynn',
    price: 1.15,
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('price reducer', () => {
  it('returns the action payload for type SET_PRICE_CONTENT.', () => {
    const action = {
      type: SET_PRICE_CONTENT,
      payload: priceContentMockData,
    }
    const initialState = []
    const expectedState = priceContentMockData
    const outputState = price(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = price(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
