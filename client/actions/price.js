import { getPriceContent } from '../apis/price'

export const SET_PRICE_CONTENT = 'SET_PRICE_CONTENT'

export function setPriceContent(price) {
  return {
    type: SET_PRICE_CONTENT,
    payload: price,
  }
}

export function getPrice(id) {
  return (dispatch) => {
    return getPriceContent(id)
      .then((price) => {
        dispatch(setPriceContent(price))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
