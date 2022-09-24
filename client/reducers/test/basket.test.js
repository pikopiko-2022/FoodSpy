import { SET_ALL_ITEMS } from '../../actions/basket'
import basket from '../basket'

const basketMockData = [
  {
    item_name: 'Bread',
    location: 'Countdown Grey Lynn',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('basket reducer', () => {
  it('returns the action payload for type SET_ALL_ITEMS.', () => {
    const action = {
      type: SET_ALL_ITEMS,
      payload: basketMockData,
    }
    const initialState = []
    const expectedState = basketMockData
    const outputState = basket(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = basket(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
