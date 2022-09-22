import { getAllItems } from '../apis/basket'

export const SET_ALL_ITEMS = 'SET_ALL_ITEMS'

export function setAllItems(items) {
  return {
    type: SET_ALL_ITEMS,
    payload: items,
  }
}

export function getItems() {
  return (dispatch) => {
    return getAllItems()
      .then((items) => {
        dispatch(setAllItems(items))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
