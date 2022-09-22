import { SET_LIST_CONTENT, SET_PRICE_CONTENT } from '../actions/list'

const initialState = []

const list = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_LIST_CONTENT:
      return payload
    case SET_PRICE_CONTENT:
      return payload
    default:
      return state
  }
}
export default list
