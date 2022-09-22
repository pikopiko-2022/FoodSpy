import { SET_ALL_ITEMS } from '../actions/basket'

const initialState = []

const basket = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALL_ITEMS:
      return payload
    default:
      return state
  }
}
export default basket
