import { SET_PRICE_CONTENT } from '../actions/price'

const initialState = []

const price = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PRICE_CONTENT:
      return payload
    default:
      return state
  }
}
export default price
