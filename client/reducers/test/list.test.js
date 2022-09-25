import { SET_LIST_CONTENT } from '../../actions/list'
import list from '../list'

const listMockData = [
  {
    id: 1,
    item_name: 'Bread',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('list reducer', () => {
  it('returns the action payload for type SET_LIST_CONTENT.', () => {
    const action = {
      type: SET_LIST_CONTENT,
      payload: listMockData,
    }
    const initialState = []
    const expectedState = listMockData
    const outputState = list(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = list(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
