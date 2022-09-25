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

export function updateItemPrice(id, price) {
  return request
    .patch(rootUrl + '/items/' + id)
    .send({ price: price })
    .then((res) => {
      return res.body
    })
}

export function getAllItems() {
  return request.get(rootUrl + '/items/').then((res) => res.body)
}
