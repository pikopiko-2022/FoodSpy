import { getPrice, SET_PRICE_CONTENT } from '../price'
import { getPriceContent } from '../../apis/price'

jest.mock('../../apis/price')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

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

describe('getPrice', () => {
  it('dispatches the SET_PRICE_CONTENT action', () => {
    getPriceContent.mockReturnValue(Promise.resolve(priceContentMockData))
    return getPrice()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_PRICE_CONTENT,
        payload: priceContentMockData,
      })
    })
  })
  it('should console.error() if API request fails', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getPriceContent.mockImplementation(() =>
      Promise.reject(new Error('Request failed'))
    )
    return getPrice()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Request failed')
    })
  })
})
