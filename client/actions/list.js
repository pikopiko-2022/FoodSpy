import { getListContent } from '../apis/list'

export const SET_LIST_CONTENT = 'SET_LIST_CONTENT'

export function setListContent(list) {
  return {
    type: SET_LIST_CONTENT,
    payload: list,
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
