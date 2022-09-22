import { getListContent, getPriceContent } from '../apis/list'

export const SET_LIST_CONTENT = 'SET_LIST_CONTENT'
export const SET_PRICE_CONTENT = 'SET_PRICE_CONTENT'

export function setListContent(list) {
  return {
    type: SET_LIST_CONTENT,
    payload: list,
  }
}

export function setPriceContent(price) {
  return {
    type: SET_PRICE_CONTENT,
    payload: price,
  }
}

export function getList() {
  return (dispatch) => {
    return getListContent()
      .then((list) => {
        dispatch(setListContent(list))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}

export function getPrice() {
  return (dispatch) => {
    return getPriceContent()
      .then((price) => {
        dispatch(setPriceContent(price))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
