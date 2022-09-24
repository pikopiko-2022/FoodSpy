import { getItems, SET_ALL_ITEMS } from '../basket'
import { getAllItems } from '../../apis/basket'

jest.mock('../../apis/basket')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const basketMockData = [
  {
    item_name: 'Bread',
    location: 'Countdown Grey Lynn',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('getItems', () => {
  it('dispatches the SET_ALL_ITEMS action', () => {
    getAllItems.mockReturnValue(Promise.resolve(basketMockData))
    return getItems()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ALL_ITEMS,
        payload: basketMockData,
      })
    })
  })
  it('should console.error() if API request fails', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getAllItems.mockImplementation(() =>
      Promise.reject(new Error('Request failed'))
    )
    return getItems()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Request failed')
    })
  })
})
