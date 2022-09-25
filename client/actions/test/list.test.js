import { getList, SET_LIST_CONTENT } from '../list'
import { getListContent } from '../../apis/list'

jest.mock('../../apis/list')

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

describe('getList', () => {
  it('dispatches the SET_LIST_CONTENT action', () => {
    getListContent.mockReturnValue(Promise.resolve(basketMockData))
    return getList()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_LIST_CONTENT,
        payload: basketMockData,
      })
    })
  })
  it('should console.error() if API request fails', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getListContent.mockImplementation(() =>
      Promise.reject(new Error('Request failed'))
    )
    return getList()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Request failed')
    })
  })
})
