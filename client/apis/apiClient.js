import request from 'superagent'

const rootUrl = '/api/v1'

export function getItemData(id) {
  return request.get(rootUrl + '/item-data/' + id).then((res) => {
    return res.body
  })
}

export function getItem(id) {
  return request.get(rootUrl + '/items/' + id).then((res) => {
    return res.body
  })
}
